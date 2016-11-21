'use strict'

var fs = require('fs');
var path = require('path');

// Define global Vue for server-side app.js
global.Vue = require('vue');

// Get the HTML layout
var layout = fs.readFileSync('./index.html', 'utf8');

// Create a renderer
var renderer = require('vue-server-renderer').createRenderer();

// Create an express server
var express = require('express');
var server = express();

// Serve files from the assets directory
server.use('/assets', express.static(
    path.resolve(__dirname, 'assets')
));

// Handle all GET requests
server.get('*', function(request, response) {

    // Render our Vue app to a string
    renderer.renderToString(
        // Create an app instance
        require('./assets/app')(),
        // Handle the rendered result
        function(error, html) {
            // If an error occurred while rendering...
            if (error) {
                // Log the error in the console
                console.error(error)
                    // Tell the client something went wrong
                return response
                    .status(500)
                    .send('Server Error');
            }
            // Send the layout with the rendered app's HTML(服务器端渲染返回给浏览器)
            response.send(layout.replace('<div id="app"></div>', html))
        }
    )
});

// 流失渲染
// 拆分布局成两段HTML
var layoutSections = layout.split('<div id="app"></div>');
var preAppHTML = layoutSections[0];
var postAppHTML = layoutSections[1];

// 处理所有的Get请求
server.get('/index.do', function(request, response) {

    // 渲染我们的Vue实例作为流
    var stream = renderer.renderToStream(require('./assets/app')());

    // 将预先的HTML写入响应
    response.write(preAppHTML);

    // 每当新的块被渲染
    stream.on('data', function(chunk) {
        // 将块写入响应
        response.write(chunk);
    });

    // 当所有的块被渲染完成
    stream.on('end', function() {
        // 将post-app HTML写入响应
        response.end(postAppHTML);
    });

    // 当渲染时发生错误
    stream.on('error', function(error) {
        // 打印错误到控制台
        console.error(error);

        // 告诉客服端发生了错误
        return response
            .status(500)
            .send('Server Error');
    });
});

// Listen on port 5000
server.listen(5000, function(error) {
    if (error) throw error
    console.log('Server is running at localhost:5000')
});
