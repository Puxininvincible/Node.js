const fs =require('fs')

fs.mkdir('./age',err=>{
    if (err) {
    console.log('创建失败'+err)
    return
}
console.log('创建成功')
})
//递归创建
fs.mkdir('./a/b/c',{recursive:true},err=>{
    if (err) {
    console.log('创建失败'+err)
    return
}
console.log('创建成功')
})