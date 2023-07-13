const http = require('http');

const server = http.createServer(function(req,res){
    res.writeHead( 200,{'Content-Type': 'text/plain'});
    res.end('hello');
});

server.listen(3000,()=>{
    console.log('Server Listening on port 3000')
})