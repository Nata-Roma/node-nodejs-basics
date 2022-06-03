import { spawn } from 'child_process';
import * as path from 'path';
import * as url from 'url';

export const spawnChildProcess = async (args) => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [filePath, ...args], {
        stdio: 'inherit',
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

spawnChildProcess([1, 4, 7]);
