const fs=require('fs')


fs.appendFile('./5.txt','000000',err => {
    if(err)throw err
    console.log('追加成功')
})