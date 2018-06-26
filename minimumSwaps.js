// HackerRank

function minimumSwaps(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== i + 1) {
            count++;
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
    return count;
}

console.log(minimumSwaps([2,3,1,5,4]));