// webpack.base.js
const path = require('path')
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const webpack = require ("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)
module.exports = {
    entry: path.join(__dirname,'../src/index.tsx'), // 入口文件
    // 出口文件
    output: {
        filename: 'static/js/[name].[chunkhash:8].js',
        path: path.join(__dirname, '../dist'),
        clean: true,
        publicPath: '/'
    },
    // 配置模块
    module: {
        rules: [
            // 解析ts,tsx文件 + 精准化解析
            {
                // include: [path.resolve(__dirname, '../src')], //只对项目src文件的ts,tsx进行loader解析
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                use: ['thread-loader', 'babel-loader']
            },
            // 解析css文件 + 精准化解析 css sass分离可以提高解析速度
            {
                test: /.css$/, //匹配 css 文件
                // include: [path.resolve(__dirname, '../src')], //只对项目src文件的css进行loader解析
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // 解析sass scss文件 + 精准化解析
            {
                test: /.(sass|scss)$/, //匹配 less 文件
                // include: [path.resolve(__dirname, '../src')], //只对项目src文件的sass,scss进行loader解析
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // 解析less文件 + 精准化解析 less依旧使用js默认解析会慢，如果必须要使用可自行打开
            {
                test: /.less$/, //匹配 less 文件
                // include: [path.resolve(__dirname, '../src')], //只对项目src文件的less进行loader解析
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // 图片解析&压缩
            {
                test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator:{
                    filename:'static/images/[name].[contenthash:8][ext]', // 文件输出目录和命名
                },
            },
            // 处理字体文件
            {
                test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator:{
                    filename:'static/fonts/[name].[contenthash:8][ext]', // 文件输出目录和命名
                },
            },
            // 处理媒体文件
            {
                test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator:{
                    filename:'static/media/[name].[contenthash:8][ext]', // 文件输出目录和命名
                },
            },
        ]
    },
    // 后缀补充
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
        alias: {
            '@': path.join(__dirname, '../src') // 配置路径引入
        },
        fallback: {
            path: require.resolve("path-browserify"),
        },
        modules: [path.resolve(__dirname, '../node_modules')], // 查找第三方模块只在本项目的node_modules中查找
    },
    // 模块配置
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            minify: "auto",
            inject: true, // 自动注入静态资源
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
        }),
    ],
    // 缓存加载
    cache: {
        type: 'filesystem', // 使用文件缓存
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://xxxxxxxxx:xxxx',
                changeOrigin: true,
                pathRewrite: { '^/api' : '' },
            },
        }
    },
    performance: {
        hints: false
    }
}
