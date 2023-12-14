arr =   [[11,2,3],
        [4,5,6],
        [10,8,-12]];

let p = 0;
let s = 0;
let n = arr.length

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i==j){
           p=p+arr[i][j]
        }else if(i==n-j-1){
           s=s+arr[i][j]
        }
    }
    
}
let dif = Math.abs(p-s)
console.log(dif)