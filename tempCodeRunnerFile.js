class Counter{
    constructor(n){
        this.n = n;
    }

    increment(){
        return this.n++;
    }
}

const counter2 = new Counter(10);
counter2.increment(); //11
counter2.increment(); //12
counter2.increment(); //13
