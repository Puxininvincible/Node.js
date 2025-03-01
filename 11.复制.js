//先读取 再写入 复制过程
const fs=require('fs')
fs.readFile(__dirname +'/file/01.txt','utf-8',(err,data)=>{
    if(err){
    console.log('读取失败'+err)
    return
}

fs.writeFile('./file/01-copy.txt',data,err=> {
    if(err)throw err
    console.log('复制成功')})
})