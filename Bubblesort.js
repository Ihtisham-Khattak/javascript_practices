

let arr = [1, 3, 2, 5, 4, 8, 7, 6, 5, 4];


let bubbleSorts = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
console.log(bubbleSorts(arr))
