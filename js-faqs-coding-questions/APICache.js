
// Implement memoizing or caching for identical API requests in JS

/*

To implement caching or memoizing for API requests in JavaScript, we can create a mechanism that stores responses from identical requests to avoid making the same network call multiple times. This approach can save bandwidth and improve the performance of our application by reusing responses.

*/

class ApiCache {
    constructor(){
        this.cache = new Map();
    }

    // utility function to fetch API responses using cache
    async fetchWithCache(apiURL){
        if (this.cache.has(apiURL)) {
            console.log('Cache hit for:', apiURL);
            return this.cache.get(apiURL);
        }

        console.log('Making API request for:', apiURL); 

        // store the in-progress fetch promise in the cache
        const fetchPromise = fetch(apiURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data from ${apiURL}`);
                }
                return response.json();
            })
            .then((data) => {
                // cache the resolved data
                this.cache.set(apiURL, data); 
                return data;
            })
            .catch((error) => {
                // remove the in-progress entry on error
                this.cache.delete(apiURL); 
                throw error;
            });

        this.cache.set(apiURL, fetchPromise);

        return fetchPromise;
    }

    // utility function to clear the cache
    clearCache(){
        this.cache.clear();
        console.log('Cache cleared');
    }
}


// test code
const apiCache = new ApiCache();

// First fetch: makes an API call and caches the result
apiCache.fetchWithCache('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log("First fetch:", data));

// Second fetch: uses the cached result
apiCache.fetchWithCache('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log("Second fetch:", data));

Promise.all([
    apiCache.fetchWithCache(`https://jsonplaceholder.typicode.com/users`),
    apiCache.fetchWithCache(`https://jsonplaceholder.typicode.com/users`)
])
.then((results) => {
    console.log("Simultaneous call - Data:", results);
})
.catch((error) => {
    console.log("Simultaneous call - Error:", error);
});