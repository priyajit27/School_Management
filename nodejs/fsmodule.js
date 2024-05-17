const fs = require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })
const a=fs.readFileSync('file.txt')
// Syne blocks after 1 st one runs then
    console.log(a)
const a1=fs.readFileSync('file.txt')
    console.log(a1.toString())

// fs.writeFile('file.txt',"This is data",()=>{
//     console.log("written in the file")
// })
const b=fs.writeFileSync('file.txt',"This is data",()=>{
    console.log(b)
})

console.log("finish reading file");
