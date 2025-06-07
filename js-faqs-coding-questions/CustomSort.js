
// Implement polyfill for sort() method in JS

if(!Array.prototype.customSort){
    Array.prototype.customSort = function(compareFn){
        const arr = this;

        // step 1 - defaultCompare function for default compare using lexicographic order
        function defaultCompare(a, b){
            const aStr = String(a);
            const bStr = String(b);
            let i = 0;
            while(i < aStr.length && i <bStr.length){
                if(aStr.charCodeAt(i) < bStr.charCodeAt(i)) return -1;
                if(aStr.charCodeAt(i) > bStr.charCodeAt(i)) return 1;
                i++;
            }

            if(aStr.length < bStr.length) return -1;
            if(aStr.length > bStr.length) return 1;
            return 0;
        }

        // step 2 - if if custom compare function (callback of sort method) is not defined, use defaultCompare function 
        const cmp = compareFn || defaultCompare;

        // step 3 - implement Merge sort form scratch
        function mergeSort(start, end){
            // base case
            if(end - start <= 1) return;

            // calculate mid
            const mid = Math.floor((start + end) / 2);

            // recursive call to first half of array
            mergeSort(start, mid);

            // recursive call to second half of array
            mergeSort(mid, end);

            // then merge
            merge(start, mid, end);
        }

        // utility function to merge sorted array
        function merge(start, mid, end){
            const left = [], right = [];
            for(let i=start; i<mid; i++){
                left.push(arr[i]);
            }

            for(let i=mid; i<end; i++){
                right.push(arr[i]);
            }

            let i=0, j=0, k = start;
            while(i < left.length && j < right.length){
                if(cmp(left[i], right[j]) <= 0){
                    arr[k++] = left[i++];
                }else{
                    arr[k++] = right[j++];
                }
            }

            while(i < left.length){
                arr[k++] = left[i++];
            }

            while(j < right.length){
                arr[k++] = right[j++];
            }
        }

        mergeSort(0, arr.length);
        return arr;
    }
}

const nums = [10, 20, 2, 4, 3, 5, 1];
const res1 = nums.customSort();
console.log("Lexical Order Sort:", res1);

const res2 = nums.customSort((a, b) => a - b);
console.log("Original Order Sort:", res2);