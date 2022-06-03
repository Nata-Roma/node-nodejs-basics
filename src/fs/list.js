import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const list = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const dirPath = path.join(__dirname, 'files');

    const files = await fsPromises.readdir(dirPath).catch((err) => {
        throw Error('FS operation failed');
    });
    for (const file of files) {
        console.log(file);
    }
};

list();
