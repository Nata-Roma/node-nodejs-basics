import crypto from 'crypto';
import { readFile } from 'fs/promises';
import * as path from 'path';
import * as url from 'url';

export const calculateHash = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const file = await readFile(filePath, 'utf-8');
    const algorithm = 'sha256';

    const cripted = crypto.createHash(algorithm).update(file).digest('hex');

    return cripted;
};

console.log(await calculateHash());
