import fs from 'fs';
import * as path from 'path';
import { stdin } from 'process';
import * as url from 'url';

export const write = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const file = fs.createWriteStream(filePath);

    stdin.pipe(file);
};

write();