
// Problem link - https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using Map with function)

let TimeLimitedCache = function() {
    // using map
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let keyAlreadyPresent = this.cache.has(key);
    // Both the value and duration should be overwritten if the key already exists
    if(keyAlreadyPresent){
        const[, prevTimerId] = this.cache.get(key);
        clearTimeout(prevTimerId);
    }

    // Once the duration has elapsed, the key should be inaccessible. 
    let timerId = setTimeout(() => {
        this.cache.delete(key);
    }, duration)

    // Both the value and duration should be overwritten if the key already exists.
    this.cache.set(key,[value,timerId]);
    return keyAlreadyPresent;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(!this.cache.has(key)){
        return -1;
    }
    const[value, ] = this.cache.get(key);
    return value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// Approach - 2 (using class)

class TimeLimitedCache1{
    cache = new Map();

    set(key,value,duration){
        let keyExist = this.cache.get(key);
        if(keyExist){
            clearTimeout(keyExist.timerId)
        }
        const timerId = setTimeout(() => {
            this.cache.delete(key)
        },duration);
        this.cache.set(key, {value, timerId});
        return Boolean(keyExist)
    };

    get(key) {
        if(this.cache.has(key)){
            return this.cache.get(key).value;
        }
        return -1;
    };

    count() {
        return this.cache.size;
    }
}
