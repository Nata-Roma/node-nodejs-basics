export const parseEnv = () => {
    const parsed = process.env;
    const arr = [];
    Object.keys(parsed).forEach((key) => {
        if (key.startsWith('RSS_')) {
            arr.push(`${key}=${parsed[key]}`);
        }
    });
    console.log(arr.join('; '));
};

parseEnv();
