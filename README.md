# jackblog react redux 版

Jackblog 是使用 Node.js + MongoDB + 其它客户端框架, 开发的个人博客系统,前后端分离,仿简书模板.此为客户端react redux 版  
服务端有:  
[express版](https://github.com/jackhutu/jackblog-api-express)  
[koa版](https://github.com/jackhutu/jackblog-api-koa)         
客户端有:  
[angular1.x版](https://github.com/jackhutu/jackblog-angular1)   
[react redux 版](https://github.com/jackhutu/jackblog-react-redux)  
[vue 版](https://github.com/jackhutu/jackblog-vue)    
移动端有:   
[react native 版](https://github.com/jackhutu/jackblog-react-native-redux)


## 开发
需要预先安装sass,compass  

```
$ npm install
$ gulp serve
```

## 打包  
 
```
$ gulp build 或 gulp serve:dist
```

## 线上布署
```
$ pm2 start process.json
```
可参考[利用git和pm2一键布署项目到vps](http://angular1.jackhu.top/article/55cd8e00c6e998b817a930c7)

## License
MIT
