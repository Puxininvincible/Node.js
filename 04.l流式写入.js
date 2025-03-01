const fs=require('fs')
let ws=fs.createWriteStream('./ok.txt')
ws.write('\r\n床前明月光') 
ws.write('\r\n疑是地上霜') 