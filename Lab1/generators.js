function* dayGenerator(){
    const days = ["Monday","Tuesday","Wednesday","Thurthday","Friday","Saturday","Sunday"];
    let i = 0

    while (true){
        yield days[i]
        i = (i + 1) % days.length;
       }
    }

    const gen = dayGenerator();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);