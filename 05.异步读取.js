const fs=require('fs')
const path=require('path')
fs.readFile(__dirname +'/file/01.txt','utf-8',(err,data)=>{
    if(err){
    console.log('读取失败'+err)
    return
}
    console.log('读取成功' +data)
})
console.log(path.join(__dirname +'../3333333.txt'))
console.log(__dirname +'/01.txt')
console.log(__dirname +'/file/01.txt')
