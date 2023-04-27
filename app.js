// 这是可以说是node的根文件
// 导入 express 模块 
// Express  是基于 Node.js 平台，快速、开放、极简的Web 开发框架。
const express = require('express');
// 创建 express 实例
const app = express();

// 导入/配置 cors(跨域) 中间件
const cors = require('cors');
// 注册为全局中间件
app.use(cors());

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));


// 导入并注册用户路由模块
const HomeRouter = require('./router')
app.use('/', HomeRouter);
app.use('/home',HomeRouter);



// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007,function(){
    console.log('api server running at http://127.0.0.1:3007');
});

