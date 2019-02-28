# react 项目模板
### 项目启动
```
npm i
npm start
```
### 技术选型
    * react+mobx+antd+react-intl
### 创建项目脚手架
    * create react app @1.5.2
## 在create-react-app中创建的项目添加配置
### 添加babel-polyfill:各种浏览器支持es6
```
npm i babel-polyfill
// webpack.config.dev.js entry 中添加如下配置
  require.resolve('babel-polyfill'),
// webpack.config.prod.js entry 中添加如下配置
  require.resolve('babel-polyfill'),
```
### less、sass支持
  * 安装 less、less-load、node-sass sass-loader
  ```
  npm i less less-loader node-sass sass-loader -D
  ```
  * webpack.config.dev module中（214行）添加如下配置
```
{
	test: /\.scss$/,
	loaders: ['style-loader', 'css-loader', 'sass-loader'],
},
{
	test: /\.less$/,
	loaders: ['style-loader', 'css-loader', 'less-loader'],
}
```
### antd 按需自动引入样式
  * 安装babel-plugin-import
  ```
  yarn add babel-plugin-import --dev   
  或者
  npm i babel-plugin-import --save-dev
  ```
  * 打开webpack.config.dev添加 第149行
```
plugins: [
	["import", [{
			"libraryName": "antd",
			"libraryDirectory": "es",
			"style": "css"
		},
		{
			"libraryName": "antd",
			"libraryDirectory": "es",
			"style": true
		}
	]] // `style: true` 会加载 less 文件
],
```
### create-react-app 配置mobx支持
  * 安装 babel-plugin-transform-decorators-legacy
```
npm i babel-plugin-transform-decorators-legacy --save-dev
```
  * 打开package.json 添加配置plugins
```
  "babel": {
    "plugins": [
      "transform-decorators-legacy"
    ],
    "presets": [
      "react-app"
    ]
  },
```
### vscode 支持装饰器
  * 设置->工作区设置
```
{
    "javascript.implicitProjectConfig.experimentalDecorators": true
}
```
### alias配置common文件的路径
  * 打开webpack.config.dev.js 在alias添加（86行）
  ```
   common: path.resolve(__dirname, '../src/common/'),
  ```
### 配置反向代理
  * 打开webpackDevServer.config proxy（89行）:注 mock数据是用的json-server
```
proxy: {
      '/mock': {
        target: 'http://localhost:3001/test',
        changeOrigin: true,
        pathRewrite:{
          "^/mock" : ""
        }
      }
    },
```
### 启动json-server
  * npm install json-server -g
  * 切换到mock数据的位置mock文件夹，执行
  ```
  json-server --watch src/mock/index -p 3001
  ```

### axios请求的封装
### 国际化：react-intl和LocaleProvider配合cookie

