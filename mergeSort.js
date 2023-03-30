function mergeSort(){
    if (arr.length < 1){
    return arr;
    }
    mid = math.floor(arr.length/2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursion with mergesort()

    sortedRight = mergeSort(left)
    sortedLeft = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

function merge(left, right){
    const res = []
    while(left.length && right.length){
        if (left[0] <= right[0]){
            res.push(left.shift())
        }
        else{
            res.push(right.shift())
        }
        
    }
    return res.concat(left, right)
}



