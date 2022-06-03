import { Transform } from 'stream';
import { stdout, stdin } from 'process';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
    stdin.pipe(reverse).pipe(stdout);
};

transform();
