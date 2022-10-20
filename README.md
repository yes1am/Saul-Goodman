# Saul-Goodman

*参考: https://github.com/leochen-g/wechatBot*  


## 1. 使用

### 1.1 本地开发

1. `npm install`
2. `node index.js`

### 1.2 部署

1. `npm run pm2deploy`

### 1.3 配置文件

在根目录新建 `saul.config.js`, 内容如下: 
```
module.exports = {
  <!-- 企业微信机器人，在服务退出的时候会发送消息提醒 -->
  wechatRobotKey: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx'
}

```

**注意:**

1. node 版本需大于 16.0

## 2. 常见错误及解决办法

### 2.1 安装在 centos 8.0

- 执行 `sh ./centos.sh` 安装对应依赖
