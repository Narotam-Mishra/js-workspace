
// Implement a custom String Tokenizer in JS

class CustomStringTokenizer {
    constructor(str, delimiters = " "){
        this.str = str;
        this.delimiters = delimiters;
        this.tokens = this.tokenize();
        this.currentIndex = 0;
    }

    // escape special characters for use in a regular expression
    escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // tokenize the input string based on the delimiters
    tokenize(){
        const delimiterRegex = new RegExp(`[${this.escapeRegExp(this.delimiters)}]+`, 'g');
        return this.str.split(delimiterRegex).filter(token => token.length > 0);
    }

    // check if there are more tokens available
    hasMoreToken(){
        return this.currentIndex < this.tokens.length;
    }

    // get the next token
    getNextToken(){
        if(this.hasMoreToken()){
            return this.tokens[this.currentIndex++];
        }else{
            throw new Error("No more tokens available");
        }
    }

    // get all remaining tokens as an array
    getRemainingTokens(){
        if(this.hasMoreToken()){
            const remaining = this.tokens.slice(this.currentIndex);
            // move to next index
            this.currentIndex = this.tokens.length;
            return remaining;
        }else{
            return [];
        }
    }
}

// example usage
const tokenizer = new CustomStringTokenizer("Hello, world! This is a test.", " ,!");

// iterate through tokens
while(tokenizer.hasMoreToken()){
    console.log(tokenizer.getNextToken());
}

// getting remaining tokens
const remaining = tokenizer.getRemainingTokens();
console.log("Remaining tokens:", remaining);

/*

Output of code:-
Hello
world
This
is
a
test.
Remaining tokens: []

*/