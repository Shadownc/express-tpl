const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const app = express();
const port = 8090,host='your hostName';

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
app.use(express.static('src'));

const apiOption = {
    target: 'http://www.baidu.com',
    changeOrigin: true,
    ws: true,
    // pathRewrite: {
    //     '^/api': ''
    // }
},
    apiProxy = proxy('/api', apiOption);
app.use('**/', apiProxy);//根目录下的都是用代理

let server = app.listen(port,host, function () {
     //console.log(server.address());
    //let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});