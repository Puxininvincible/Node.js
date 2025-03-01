const fs = require('fs')
fs.writeFile('./file/1.html', '今天是\'晴天\'', function (err) {
    //console.log(err)
    if(err){
        console.log('写入失败'+err)
        return
    }
    console.log('写入成功')
})

console.log('----------')
if(!null){
    console.log(111111111)
}else{
    console.log(22222222)
}