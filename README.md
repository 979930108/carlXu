# carlXu
node.js环境下的基础工程模板，自带webpack打包压缩文件，支持react es6，实时更新调试
本项目支持 es6 react less 带打包压缩自动构建页面功能，修改代码自动打包并实时更新调式页面,
1. npm start 运行打包好的项目
2. npm run webpack 开始打包项目，修改打包前项目中的代码(app中的代码)，自动打包到public目标目录，并且压缩代码。
3. npm run server 开启实时更新调式页面，当页面调试好完成了后，再运行步骤2 npm run webpack，将项目打包到public文件夹，再用git发布到服务器
注意 app/main.js 是项目入口 文件名不可以修改，index.tmpl.html 是项目模板主页面，文件名不可以修改，public里面的文件在打包的时候自动生成，如果需要改名字到webpack.config.js中修改配置，配置说明见 webpack说明（webpackExplain）