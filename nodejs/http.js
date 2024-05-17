const {Console}=require('console');
const res = require('express/lib/response')
const http=require('http')
const port=process.env.PORT ||3000
const server=http.createServer((req,res)=>{
    console.log(req.url)
res.statusCode=200;
res.setHeader('Content-Type','text/html')
res.end('<h>This is rup </h><p> this is tutorial node.js  </p>')
})
server.listen(port,()=>{
console.log(`Server is listening on port ${port}`)
});