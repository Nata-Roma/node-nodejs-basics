import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const read = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const content = await fsPromises.readFile(filePath, 'utf-8');
    console.log(content);
};

read();
