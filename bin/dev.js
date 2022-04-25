const webpack = require('webpack');
const express = require('express');
const [webpackClientConfig,webpackServerConfig] = require('../webpack.config.js');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hrmServer = express();
const clientCompiler = webpack(webpackClientConfig);

hrmServer.use(webpackDevMiddleware(clientCompiler,{
    publicPath: webpackClientConfig.output.publicPath,
    serverSiderender: true,
    noInfo: true,
    watchOptions:{
        ignore:'/dist/',
    },
    writeToDisck: true,
    stats: 'error-only,'
}));

hrmServer.use(webpackHotMiddleware(clientCompiler,{
    path: '/static__webpack_hmr',
}));

hrmServer.listen(3001,()=>{
    console.log('hrm is ok')
})


const compiler = webpack(webpackServerConfig);

compiler.run((err)=>{
    if (err){
        console.log('error:',err);
    }

    compiler.watch({},(err) => {
        if (err){
            console.log('error:',err);
        }
        console.log('all good');
    });
    nodemon({
        script: path.resolve(__dirname,'../dist/server/server.js'),
        watch: [
            path.resolve(__dirname,'../dist/server'),
            path.resolve(__dirname,'../dist/client'),
        ]
    })
});