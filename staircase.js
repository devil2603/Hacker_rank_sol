const { string } = require("i/lib/util")

n = 6

// for(let i=0;i<n;i++){
//     let string = ""
//     for(j=0;j<n;j++){
//         if(j<n-i-1){
//             string += " "
//         }else {
//             string += "#"
//         }
//     }
//     console.log(string)
// }













for(let i=0;i<n;i++){
    let string = ""
    for(let j=0;j<n;j++){
        if(j<n-i-1){
            string = string+" "
        }else{
            string = string+"#"
        }
    }
    console.log(string)
}