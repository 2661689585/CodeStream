// 这个router 文件夹就是专门放路由模块的文件夹
// 路由模块中，只存放客户端的请求与处理函数之间的映射关系

//为了保证 路由模块 的纯粹性，所有的 路由处理函数，必须抽离到对应的 路由处理函数模块 (router-handler 文件夹中) 中

const express = require('express');
// 创建路由对象
const router = express.Router();

// express 中的路由分 3 部分组成,分别是 请求的类型、请求的url地址、处理函数
// router.post('/home',(req,res) => {
//     res.send('home OK');
// });      // 正常写发，将 处理函数分离后 ：

// 导入用户路由处理函数模块
const HomeHandler = require('../router-handler/index');
// 然后直接调用 HomeHandler 模块 共享出来的方法
router.get('/', HomeHandler.regHome);
router.get('/home', HomeHandler.regHome);


// 将路由对象共享出去
module.exports = router;