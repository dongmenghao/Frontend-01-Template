const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request received')
  console.log(req.headers)
  console.log()
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'bar')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`<html maaa=a>
<head>
    <style>
#container {
    width: 500px;
    height: 300px;
    display: flex;
    background-color: rgb(255,255,255);
}
#container #myid{
    width:200px;
}
#container>div {
    height: 200px;
}
#container .c1 {
    flex: 1;
}
#container .c2 {
    flex: 2;
}
.blue {
    background-color: rgb(0,0,255);
}
.green {
    background-color: rgb(0,255,0);
}
.red {
    background-color: rgb(255,0,0);
}
    </style>
</head>
<body>
    <div id="container">
        <div id="myid" class="red"></div>
        <div class="c1 green"></div>
        <div class="c2 blue"></div>
    </div>
</body>
</html>
`)
});
server.listen(8088,'127.0.0.1', () => {
  console.log("server is start: " + 8088);
});