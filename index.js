/**
 * Created by ycd15 on 16/11/21.
 */
var express = require('express');
var fs = require('fs');
var multer = require('multer'); //用于文件上传
var body_parser = require('body-parser');//用于解析JSON消息体的三方模块

var app = express();

app.use(express.static('public'));
//app.use(multer({dest:'./uploadFile/'}));//记得在post上传文件的时候传.array('image')这类的
app.use(body_parser.json());//解析JSON消息体
app.use(body_parser.urlencoded({extended:false}));//解析URL

//开通端口port
var server = app.listen(8080,function () {
    console.log("访问地址: http://127.0.0.1:8080");
})

//主页请求
app.get('/',function (req, res) {
    //
    console.log('主页 GET 请求');
    res.send('get 请求成功');
})

app.post('/',function (req, res) {
    console.log('主页 POST 请求');
    res.send('post 请求成功');
})


/*
*   GET 请求
*
*   get请求获取url中的参数需要req.query.[参数]即可获取对应的value
* */
app.get('/index',function (req, res) {
    //console.log("qwer:"+req.hostname+"\n--"+req.fresh+"\n--"+req.originalUrl+"\n--"+req.query.name+req.query.passworld);
    fs.readFile('indexList.json',function (err, data) {
        if(err) {
            res.send(err.toString());
        }else {
            res.send(data.toString());
        }
    })
})


/*
*   POST 请求
*
*   post请求获取url中的参数需要req.body.[参数]即可获取对应的value
* */
app.post('/index',function (req, res) {
    console.log(req.body.passworld);

    fs.readFile('indexList.json',function (err, data) {
        if(err) {
            res.send(err.toString());
        }else {
            res.send(data.toString());
        }
    })
})