
/*

Create a toggle function in Javascript that accepts a list of arguments and toggle each of them when invoked in a cycle.

*/

// Approach - 1
function solve(){
    const toggle = (...args) => {
        let currIndex = -1;
        return () => {
            // check if we have reached the end of args array
            if(++currIndex >= args.length){
                // reset the current index
                currIndex = 0;
            }

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


solve();

// Approach - 2
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

    let Skillsfn = toggle("AI", "ML", "DL");
    Skillsfn();
    Skillsfn();
    Skillsfn();

    let onOffFn = toggle("Off", "On", "Nothing");
    onOffFn();
    onOffFn();
    onOffFn();
}

solve1();