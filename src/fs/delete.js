import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const remove = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    await fsPromises.rm(filePath).catch((err) => {
        if (err.code === 'ENOENT') {
            throw Error('FS operation failed');
        }
    });
};

remove();
