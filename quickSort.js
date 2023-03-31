function qkSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    
    const pivot = arr[arr.length-1];
    var left = [];
    var right = [];

    for (let i=0; i < arr.length-1; i++){
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
       }
    }

    const sortedLeft = qkSort(left);
    const sortedRight = qkSort(right);
    return sortedLeft.concat(pivot, sortedRight);
    
    
}


arr = [5,8,1,7,2,0];

console.log(qkSort(arr));
