import fs from 'fs';
import * as path from 'path';
import { stdout } from 'process';
import * as url from 'url';

export const read = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const stream = fs.createReadStream(filePath);
    stream.pipe(stdout);
};

read();
