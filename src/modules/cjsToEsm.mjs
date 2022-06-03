import { sep, dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await readFile(new URL('./files/a.json', import.meta.url)));
} else {
    unknownObject = JSON.parse(await readFile(new URL('./files/b.json', import.meta.url)));
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };
