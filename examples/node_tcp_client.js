const net=require('net')
let client =new net.Socket();
client.setEncoding('utf-8')
client.connect('4003','localhost',function(){
    console.log("已连接到服务器")
    client.write('ZCZC')
    client.write('Helloworld'.repeat(100000))
    client.write('NNNN')
    client.write('ZCZ')
    client.write('CgoodNNN')
    client.write('N')
})