const asdd = require('./hello')
console.log('asdd', asdd.handler)


// 引入系统模块http
const http = require('http');
// 创建web服务器
const app = http.createServer();
// 用request添加服务器请求事件
app.on('request',(req,res) => {
    // 获取到url
    console.log(req.url);
    // 修改内容类型为html 编码格式为urf8
    res.writeHead(200,{
        'content-type':'text/html;charset=utf8'
    })

    asdd.handler(req, req, null)
    // if(req.url == '/index' || req.url == '/'){
    //     res.end('Welcome to Homepage欢迎来到首页~');
    // }else if(req.url == '/list'){
    //     res.end('Welcome to Listpage欢迎来到列表页~');
    // }else {
    //     res.end('Not Found抱歉，没有找到相关页面');
    // }
})
app.listen(3007);
console.log('网站服务器启动成功');
// ————————————————
// 版权声明：本文为CSDN博主「奄奄一息的一条咸鱼」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_46682277/article/details/119425528