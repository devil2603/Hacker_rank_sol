a = [5,6,7]
b = [3,6,10]

let alice = 0

let bob = 0

for(let i=0;i<a.length;i++){
    if(a[i]<b[i]){
        alice++
    }else if(a[i]>b[i]){
        bob++
    }
}

console.log(alice+" "+bob)