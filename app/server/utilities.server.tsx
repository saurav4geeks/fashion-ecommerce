export async function getEnvironmentVariable(
    name: string
): Promise<string | Error> {
    const value = process.env[name];
    if (value) {
        return value;
    } else {
        return Promise.reject(
            new Error(`Could not find environment variable ${name}`)
        );
    }
}
