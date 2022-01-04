let port=8001;
let ip='127.0.0.1';
let dgram=require('dgram')
let msg0=Buffer.from('3e005d9f7d23020103354789005fb67d01526f32ff96e0ff861efe39fe6a0e7b400c76b7c77ce0807817cd02cc011180027bffc8010343475a3731373300000cab844132304e4d5a5353485a5555553034000210071900400a05000440','hex')
let msg=Buffer.from('3e005d9f7d','hex');
let msg1=Buffer.from('23020103354789005fb67d01526f32ff96e0ff861efe39fe6a0e7b400c76b7c77ce0807817cd02cc011180027bffc8010343475a3731373300000cab844132304e4d5a5353485a5555553034000210071900400a05000440','hex')
let client=dgram.createSocket({
    type:'udp4',
    sendBufferSize:1024*100
})
for(let i=0;i<10;i++){
    client.send(msg,port,ip,function(err,bytes){
        if(err) throw err;
    });
    client.send(msg1,port,ip,function(err,bytes){
        if(err) throw err;
    });
    client.send(msg0,port,ip,function(err,bytes){
        if(err) throw err;
    });
}
