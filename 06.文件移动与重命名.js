const fs=require('fs')

//fs.rename('./ok.txt','./file/3333333.txt',err =>{
   // fs.rename('./05.异步读取.js','./file/05.异步读取.js',err=>{
    //if (err) {
      //  console.log('重命名失败'+err)
        //return
    //}
    //console.log('重命名成功')
//})
fs.unlink('./5.txt',err =>{
    if(err)throw err
    console.log('删除成功')
})