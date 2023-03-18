function inseSort(){
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i];

        let j = i - 1;

        while(j>=0 && arr[j] > curr){
                arr[j+1] = arr[j]; 
                j--
            }
        ``
        arr[j+1]  = curr;
        
    }


    return arr;
}

let arr = [22,13,8,7,-12]

console.log(inseSort(arr))
