import zlib from 'zlib';
import fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import * as url from 'url';
import { pipeline } from 'stream/promises';

export const decompress = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const fileFrom = path.join(__dirname, 'files', 'archive.gz');

    const fileTo = path.join(__dirname, 'files', 'fileToCompress.txt');

    await pipeline(fs.createReadStream(fileFrom), zlib.createUnzip(), fs.createWriteStream(fileTo));

    console.log('Pipeline succeeded');
    await fsPromises.rm(fileFrom);
};

decompress();
