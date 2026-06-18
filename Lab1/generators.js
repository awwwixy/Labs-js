function* dayGenerator(){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let i = 0

    while (true) {
        yield days[i]
        i = (i + 1) % days.length;
       }
    }

    function consumeWithTimeout(iterator, seconds) {
        const start = Date.now();
        let iteration = 0;

        const timer = setInterval(() => {
            if  (Date.now() - start >= seconds * 1000) {
                clearInterval (timer);
                return;
            }

            const value = iterator.next().value;
            iteration++;
            console.log(`Iteration ${iteration}: ${value}`);
        }, 300);
    }

            const gen = dayGenerator();
            consumeWithTimeout(gen, 3);