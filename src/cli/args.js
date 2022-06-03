export const parseArgs = () => {
    const args = process.argv.slice(2);
    const arr = [];
    for (let i = 0; i < args.length; i += 2) {
        const output = `${args[i].slice(2)} is ${args[i + 1]}`;
        arr.push(output)
    }
    console.log(arr.join(', '));
};

parseArgs();
