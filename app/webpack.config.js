const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
    entry: __dirname + "\/app\/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "\/public", //打包后的文件存放地方
        filename: "bundle-[hash].js" // 打包后文件的输出名，hash值
    },
    devtool: 'eval-source-map',//一种调试方式
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录，在内存中展示
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true//HMR热加载
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",//讲es6 react 转化为可以执行的代码
                    options: {//可以用.babelrc文件配置，webpack自动识别
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },{
                test: /\.css$/,//配置css加载css
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        //以下配置不建议使用 否则样式出错了 很难找到地方修改
                        //options: {//设置css只在当前组件中有效,如果不需要则需要删除否则类名会显示乱码，注意css使用方式：import styles from './main.css'; <div className={styles.root}></div>
                            //modules: true
                        //}
                    }, {
                            loader: "postcss-loader"//和autoprefixer自动根据浏览器添加前缀
                        }
                ]
            }
        ]
    },
    plugins: [//添加插件
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数,根据模板自动生成
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件 ,可以让代码编辑保存后自动打包更新到目标文件夹 配合hot：true 以及babelrc的设置
        new webpack.optimize.OccurrenceOrderPlugin(),//内置组件，为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.UglifyJsPlugin(),//内置组件，压缩JS代码；
        new ExtractTextPlugin("style.css"),//非内置需要引入，分离CSS和JS文件
    ],
};