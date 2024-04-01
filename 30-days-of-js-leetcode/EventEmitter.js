
// Problem link - https://leetcode.com/problems/event-emitter/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 ()
class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

    cbArr = [];
    subscribe(eventName, callback) {
        // An array of results should be returned
        this.cbArr[eventName] = this.cbArr[eventName] || [];
        // maintin order as each should be called in the order 
        this.cbArr[eventName].push(callback);
        return {
            unsubscribe: () => {
                // if(this.cbArr[eventName].length > 1){
                //     // When cb is called, the callback should be removed
                //     this.cbArr[eventName].shift();
                // }else{
                //     delete this.cbArr[eventName];
                // }

                this.cbArr[eventName] = this.cbArr[eventName].filter((fn) => fn!== cb) 
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if(this.cbArr[eventName]){
            // return an array of the results of all callback calls in the order they were subscribed.
            return this.cbArr[eventName].map((cb) => cb(...args))
        }
        // If there are no callbacks subscribed, return an empty array
        return [];
    }
}

// Approach - 2  (Efficient Approach)

class EventEmitter {
    // using eventMap obj to return the required values
    eventMap = {};
    
    subscribe(event, cb) {
        if(!this.eventMap.hasOwnProperty(event)){
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(cb);
        return {
            unsubscribe: () => {
                this.eventMap[event].delete(cb);
            }
        };
    }
    
    emit(event, args = []) {
        let res = [];
        if (this.eventMap[event]){
            this.eventMap[event].forEach((cb) => res.push(cb(...args)));
            return res;
        }
        return res;
    }
}