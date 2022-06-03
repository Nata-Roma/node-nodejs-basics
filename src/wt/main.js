import os from 'os';
import * as path from 'path';
import * as url from 'url';
import { Worker, isMainThread, parentPort } from 'worker_threads';

export const performCalculations = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'worker.js');

    if (isMainThread) {
        const cpus = os.cpus();
        const workerRes = [];

        const num = 10;
        for (let i = 0; i < cpus.length; i++) {
            workerRes.push(
                new Promise((res, rej) => {
                    const worker = new Worker(filePath, { argv: [i + num] });
                    worker.once('message', (result) => {
                        res({data: result, id: i});
                    });
                    worker.on('error', (err) => {
                        rej({data: null, id: i})
                    })
                }),
            );
        }
        await Promise.allSettled(workerRes).then((val) => {
            const resultArr = Array.from({ length: cpus.length }, () => ({
                status: 'error',
                data: null,
            }));

            val.forEach((item) => {
                resultArr[item.value.id].status = item.status === 'fulfilled' ? 'resolved': 'error';
                resultArr[item.value.id].data = item.value.data;
            });

            console.log(resultArr);
        });
    }
};

performCalculations();
