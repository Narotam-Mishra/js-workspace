function solve1(){
    const toggle = (...args) => {
        let currIndex = -1;

        // find length of arguments `args` array
        const len = args.length;

        return () => {
            currIndex = (currIndex + 1) % len;
            // toggle - print value from args array
            console.log(args[currIndex]);
        }
    }

    let Skillsfn = toggle("JS", "React", "Node");
    Skillsfn();
    Skillsfn();
    Skillsfn();

    let onOffFn = toggle("on", "off", "neutral");
    onOffFn();
    onOffFn();
    onOffFn();
}

solve1();