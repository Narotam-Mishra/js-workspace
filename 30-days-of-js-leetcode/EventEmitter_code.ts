
// Problem link - https://leetcode.com/problems/event-emitter/?envType=study-plan-v2&envId=30-days-of-javascript

type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events: { [key: string]: Callback[] } = {};
    subscribe(eventName: string, callback: Callback): Subscription {
        // An array of results should be returned
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        // maintin order as each should be called in the order 
        this.events[eventName].push(callback);
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                if(this.events[eventName].length === 0){
                    delete this.events[eventName]
                }
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        if(!this.events[eventName]){
            return [];
        }
        return this.events[eventName].map(cb => cb(...args))
    }
}


// Main runner code
const eventEmitter = new EventEmitter();

const subscription1 = eventEmitter.subscribe('event1', (data) => {
    console.log('event1 listener1', data);
});

const subscription2 = eventEmitter.subscribe('event1', (data) => {
    console.log('event1 listener2', data);
});

eventEmitter.emit('event1', ['data1']); // Should log: "event1 listener1 data1" and "event1 listener2 data1"

subscription1.unsubscribe();

eventEmitter.emit('event1', ['data2']); // Should log: "event1 listener2 data2"