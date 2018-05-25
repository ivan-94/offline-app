# 优化清单

* [优化清单](#优化清单)
  * [前端优化](#前端优化)
  * [前端运行时优化](#前端运行时优化)
  * [服务端优化](#服务端优化)
  * [客户端优化](#客户端优化)
  * [开发和协作规范](#开发和协作规范)
  * [鉴权规范](#鉴权规范)
  * [参考文献](#参考文献)

不管是 PWA 还是用 Webview Hybrid 的方式, 除了缓存我们还需要做很多的优化, 才能确保更好的应用体验

## 前端优化

* 预解析 DNS
* App Shell
* 体积优化
* 惰性加载
* 公共资源包提取. 公共资源包可以打包进客户端中. 客户端拦截返回这些资源
* 屏蔽 webview HTML 内容自动识别
* 设置 favicon.ico. 浏览器始终会加载这个文件, 确保它存在并设置较长的缓存时间. 避免浪费连接资源

## 前端运行时优化

## 服务端优化

* 开启 Gzip
* 使用 nginx 单独部署静态资源, 动静分离
* 开启 gzip
* 延迟鉴权, 使用 Token 方式鉴权

## 客户端优化

* 预加载 webview, 参考[WebView 性能、体验分析与优化](https://tech.meituan.com/WebViewPerf.html)
* 页面预加载, 让应用缓存下来, 例如开启一个隐藏的webview页

## 开发和协作规范

* 文档规范
* 开发优化, 前后端协作规范
* 区分开发环境和生产环境

## 鉴权规范

* Token 和 Session 对比分析

  * Token 优势
    * 支持跨域
    * 开发环境下容易模拟, 特别是在应用这种没有登录界面的场景.
    * Session 基于相比 cookie, cookie 安全性较低, 比如容易 CSRF 攻击.
    * 在一些平台, 如 React Native, 根本就不支持 cookie 存储
    * 可以实现服务端无状态化, Token 自包含鉴权信息

* 鉴权流程优化提议

## 参考文献

[H5 性能优化方案](https://mp.weixin.qq.com/s/pEKpjAhwDMIKQ4fzxix2eQ)
[移动 H5 首屏秒开优化方案探讨](https://blog.cnbang.net/tech/3477/)
[移动端本地 H5 秒开方案探索与实现](https://mp.weixin.qq.com/s/0OR4HJQSDq7nEFUAaX1x5A)
