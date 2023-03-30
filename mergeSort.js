function mergeSort(arr){
    if (arr.length <= 1){
    return arr;
    }
    mid = Math.floor(arr.length/2);

    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    // Recursion with mergesort()

    var sortedRight = mergeSort(left);
    var sortedLeft = mergeSort(right);

    const res = [];
    while(sortedLeft.length && sortedRight.length){
        if (sortedLeft[0] <= sortedRight[0]){
            res.push(sortedLeft.shift());
        }
        else{
            res.push(sortedRight.shift());
        }
        
    }
    return res.concat(sortedLeft, sortedRight);
}


const arr = [9, 3, 5, 1, 4, 8, 0]
console.log(mergeSort(arr))



