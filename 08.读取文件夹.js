const fs =require('fs')
//文件夹里有文件，显示具体文件名称
fs.readdir('./file',(err,data)=>{
    if(err) throw err
    console.log(data)
})
//文件夹里只有文件夹，只显示文件夹名称
fs.readdir('./a',(err,data)=>{
    if(err) throw err
    console.log(data)
})
//什么都没有 []
fs.readdir('./age',(err,data)=>{
    if(err) throw err
    console.log(data)
})