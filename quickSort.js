function qkSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    
    const pI = arr[arr.length-1];
    var left = [];
    var right = [];

    for (i=0; i < arr.length-1; i++){
        if (arr[i] < pI){
            left.push(arr[i]);
        } 
        else {
            right.push(arr[i]);
       }
    }

    sortedLeft = qkSort(left);
    sortedRight = qkSort(right);
    return [...sortedLeft, pI, ...sortedRight];
    
    
}


arr = [1,4,5,6,2,3];

console.log(qkSort(arr));
