import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const copy = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const sourceDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    const files = await fsPromises.readdir(sourceDir).catch((err) => {
        throw Error('FS operation failed');
    });

    fsPromises
        .mkdir(destDir)
        .then(async () => {
            for (const file of files) {
                const sourceFile = path.join(__dirname, 'files', file);
                const destFile = path.join(__dirname, 'files_copy', file);
                await fsPromises.copyFile(sourceFile, destFile);
            }
        })
        .catch((err) => {
            if (err.code == 'EEXIST') {
                throw Error('FS operation failed');
            }
        });
};

copy();
