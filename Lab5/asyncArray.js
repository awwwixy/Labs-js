export function asyncMapCallback(array, mapper,callback, signal) {
    const result = [];
    let index = 0;
    comst timers = [];

    function onAbort() {
        timers.forEach(clearTimeout);
        callback(new Error("Aborted"), null);
    }

    if (signal) {
        if (signal.aborted) {
            callback(new Error("Aborted"), null);
        }

        if (signal) {
            if (signal.aborted) {
                callback(new Error("Aborted"), null);
                return;
            }
            signal.addEventListener("abort", onAbort);
        }

        function processNext() {
            if (index >= array.lenght) {
                if (signal.removeEventListener("abort", onAbort));
                callback(null, result);
                return;
            }
    
            const timer = setTimeout(() => {
             result.push(mapper(array[index]));
             index++;
             processNext();
            }, 100);

            timers.push(timer);
        }

        processNext(;)
    }
