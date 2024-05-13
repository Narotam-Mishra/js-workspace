
// Problem link - https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

class TimeLimitedCache {
    
    cache: Map<number, {value: number; timerId: NodeJS.Timeout }> = new Map();
    set(key: number, value: number, duration: number): boolean {
        const keyExist = this.cache.get(key);
        if(keyExist){
            clearTimeout(keyExist.timerId);
        }
        const timerId = setTimeout(() => {
            // Once the duration has elapsed, the key should be inaccessible
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, {value, timerId});
        // return true if the same un-expired key already exists otherwise false
        return Boolean(keyExist);
    }
    
    get(key: number): number {
        if(this.cache.has(key)){
            return this.cache.get(key)!.value;
        }
        return -1;
    }
    
    count(): number {
        return this.cache.size;
    }
}

const cache = new TimeLimitedCache();

// Adding some data to the cache

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count());  // 1
