import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const create = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const writeOptions = { flag: 'wx' };
    const fileName = path.join(__dirname, 'files', 'fresh.txt');
    const data = 'I am fresh and young';
    try {
        await fsPromises.writeFile(fileName, data, writeOptions);
    } catch (error) {
        console.log(error);
        throw Error('FS operation failed');
    }
};

create();
