# Webpack教程
> Webpack是一个模块打包工具(module bundler)，因为平常多用来对前端工程打包，所以也是一个前端构建工具。其最主要的功能就是模块打包，官方对这个打包过程的描述不太容易理解。
模块打包，通俗地说就是：找出模块之间的依赖关系，按照一定的规则把这些模块组织合并为一个JavaScript文件。
Webpack认为一切都是模块，JS文件、CSS文件、jpg/png图片等等都是模块。Webpack会把所有的这些模块都合并为一个JS文件，这是它最本质的工作。
## 安装Webpack工具包
```shell
yarn add webpack webpack-cli webpack-dev-server --dev
```
## 核心概念
1. 入口（entry）入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的
2. 出口（output）output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。
3. loader，loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
4. 插件（plugins）loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。
### 配置输入输出
```javascript
// webpack.config.js
const path = require("path");
module.exports = {
    // 将入口文件指定为main.js
    entry: {index: path.resolve(__dirname, "src", "main.js")},
    // 将输出文件目录改为build/
    output: {
        path: path.resolve(__dirname, "build")
    }
};
```
### 配置插件
```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ]    
}
```
### 本地服务
作为开发者，肯定会用到本地服务，webpack提供了development server，可以很方便的启动一个本地服务，方便开发者进行开发工作。
```javascript
"scripts": {
    "start": "webpack serve --mode development"
}
```
### 加载css
先安装css-loader,style-loader,loaders的顺序很重要，webpack加载loaders的顺序是从右到左。
```javascript
yarn add css-loader -D
yarn add style-loader -D
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
```