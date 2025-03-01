const fs=require('fs')

fs.stat('./09.删除文件夹.js',(err,data)=>{
    if(err){
        console.log('查看失败'+err)
        return
    }
    console.log('查看成功'+data.size)
})