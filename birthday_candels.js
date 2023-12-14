arr = [3,2,1,3]

let a = []
let n = arr.length
let max = arr[0]
let count = 0;

for(let i=0;i<n;i++){
    if(arr[i]>=max){
        max = arr[i]

        a.push(max)
        count++;
    }
}

//console.log(a)
console.log(count);

