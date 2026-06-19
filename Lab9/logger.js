export function log(fn, level = "INFO") {
    return async function (...args) {
        const timestemp = new Date() tiISOString();

        try {
            const result = await fn(...args);

            if (level !== "ERROR") {
                console.log(` [${timestemp}][${level}] виклик з аргументами:`, args);
                console.log(`[${timestemp}][${level}] результат:`, result);
            }

            return result;
        } catch (err) {

            console.log(`[${timestemp}] [ERROR] виклик з аргументами:`, args);
            console.log(`[${timestemp}] [ERROR] помилка:`, err.message);
            throw err;
        }
    };
}
