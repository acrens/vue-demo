const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge');

const baseConfig = {

    target: 'web',  // 打包成不同环境的可用文件

    devtool: 'inline-source-map',

    // 入口文件
    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fullDir = path.join(__dirname, dir)
        const entry = path.join(fullDir, 'app.js')
        if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
            entries[dir] = ['webpack-hot-middleware/client', entry]
        }

        return entries  // {assets: ['', '']}
    }, {}),

    // 输出文件
    output: {
        devtoolLineToLine: true,
        path: path.join(__dirname, 'build'),    // 本地硬盘目录
        filename: '[name].js',  // 对应模块文件名称[name]
        chunkFilename: '[id].chunk.js',
        publicPath: '/build/'   // 输出文件路径
    },

    module: {
        // test, include, exclude, loader, query
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.vue$/, loader: 'vue' }
        ]
    },

    // 添加模块，提供给 import 引入
    resolve: {
        alias: {
            vuex: path.resolve(__dirname, './dev-entry')
        }
    },

    // 插件目的在于解决 loader 无法实现的其他事
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js'),   // 提取通用代码
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),    // 确保模块具有一致顺序（TODOS：没明白）
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

// 打包成不同目标环境的可用文件
const targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main'].map((target) => {
    const base = webpackMerge(baseConfig, {
        target: target,
        output: {
            path: path.resolve(__dirname, './build/' + target),
            filename: '[name].' + target + '.js'
        }
    });

    return base;
});

module.exports = targets;
