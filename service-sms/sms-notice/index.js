var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');


/*
To enable the initializer feature (https://help.aliyun.com/document_detail/156876.html)
please implement the initializer function as below：
exports.initializer = (context, callback) => {
  console.log('initializing');
  callback(null, '');
};
*/

exports.handler = (req, resp, context) => {
    console.log('hello world2');

    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method: req.method,
        requestURI: req.url,
        clientIP: req.clientIP,
    }

    console.log('req.queries', req.queries)
    // {
    //     content: '19999999999\n' +
    //         '【测试通道】恭喜您，该发送通道测试成功，请继续添加转发规则！\n' +
    //         'SIM1_测试运营商_18888888888\n' +
    //         '2022-05-21 17:49:41\n' +
    //         'Redmi Note 5',
    //         from: '19999999999'
    // }

    getRawBody(req, function (err, body) {
        for (var key in req.queries) {
            var value = req.queries[key];
            resp.setHeader(key, value);
        }
        resp.setHeader("Content-Type", "text/plain");
        // console.log('body', body)
        params.body = body.toString();
        const json = JSON.stringify(params.body)
        console.log('json', json)
        resp.send(JSON.stringify(params, null, '    '));
    });

    /*
    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        console.log(formBody);
        resp.send(JSON.stringify(params));
    }); 
    */
}