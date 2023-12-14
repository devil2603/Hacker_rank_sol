let arr = [1,2,3,4,5]

let sum = 0
let mini = arr[0]
let max = arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<mini){
        mini = arr[i]
    }else if(arr[i]>max){
        max = arr[i]
    }
    sum = sum+arr[i]
}
let maxsum = sum - mini
let minsum = sum - max
console.log(minsum , maxsum)