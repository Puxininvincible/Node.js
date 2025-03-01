const fs=require('fs')

fs.readFile('./ok.txt','utf-8',(err,data)=>{
    console.log(err)
    console.log('--------')
    console.log(data)})
    //if(err){
       // console.log('读取失败'+err)
        //return
    //}
    //console.log('读取成功:'+data)
    console.log('---------22222')
let ws =fs.readFile('./3.txt','utf-8')
console.log(ws)