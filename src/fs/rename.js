import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const rename = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const dir = path.join(__dirname, 'files');
    const oldPath = path.join(dir, 'wrongFilename.txt');
    const newPath = path.join(dir, 'properFilename.md');

    const files = await fsPromises.readdir(dir);
    const foundTxt = files.find((file) => file === 'wrongFilename.txt');
    const foundMd = files.find((file) => file === 'properFilename.md');

    if (!foundTxt || foundMd) throw Error('FS operation failed');

    await fsPromises.rename(oldPath, newPath);
};

rename()