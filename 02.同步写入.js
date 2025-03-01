const f2=require('fs')
//let ws =f2.writeFileSync('./3.txt','node.js')
//console.log(ws);
//console.log('----------')
//if(!null){
   // console.log(111111111)
//}else{
  //  console.log(22222222)
//}
try{
    let ws =f2.writeFileSync('./file/3.txt','node.js')
    console.log(ws);
}catch(e){
    console.log('写入失败'+e)
}