arr = [-4,3,-9,0,4,1]

let plus = 0
let minus = 0
let zero = 0

for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        minus++
    }else if(arr[i]>0){
        plus++
    }else if(arr[i]==0){
        zero++
    }

}
let a=plus/6
let b=minus/6
let c=zero/6

console.log(a,b,c)