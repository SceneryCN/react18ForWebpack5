// webpack.prod.js 默认开启tree-shaking清理未使用的组件
const path = require ("path");
const { merge } = require('webpack-merge')
const CopyPlugin = require ("copy-webpack-plugin");
const TerserPlugin = require ("terser-webpack-plugin");
const baseConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");
const CssMinimizerPlugin = require ("css-minimizer-webpack-plugin");
const CompressionPlugin = require ("compression-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
    plugins: [
        // 复制文件
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'), // 复制public下文件
                    to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
                    filter: source => {
                        return !source.includes('index.html') // 忽略index.html
                    }
                },
            ],
        }),
        // 抽离css
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css' // 抽离css的输出目录和名称
        }),
        // 开启该功能就不能使用css模块化 , 开启需要安装glob-all和purgecss-webpack-plugin
        // // 清理无用css
        // new PurgeCSSPlugin({
        //     // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
        //     paths: globAll.sync([
        //         `${path.join(__dirname, '../src')}/**/*.tsx`,
        //         path.join(__dirname, '../public/index.html')
        //     ]),
        // }),
        // 开启gZip压缩
        new CompressionPlugin({
            test: /.(js|css)$/, // 只生成css,js压缩文件
            filename: '[path][base].gz', // 文件命名
            algorithm: 'gzip', // 压缩格式,默认是gzip
            threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
            minRatio: 0.8 // 压缩率,默认值是 0.8
        })
    ],
    // 压缩css
    optimization: {
        minimizer: [
            // 压缩css
            new CssMinimizerPlugin(),
            // 压缩js
            new TerserPlugin({
                parallel: true, // 开启多线程压缩
                terserOptions: {
                    compress: {
                        pure_funcs: ["console.log"] // 删除console.log
                    }
                }
            }),
        ],
        // 分割第三方包以及公共模块
        splitChunks: {
            cacheGroups: {
                vendors: { // 提取node_modules代码
                    test: /node_modules/, // 只匹配node_modules里面的模块
                    name: 'vendors', // 提取文件命名为vendors,js后缀和chunkhash会自动加
                    minChunks: 1, // 只要使用一次就提取出来
                    chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
                    minSize: 0, // 提取代码体积大于0就提取出来
                    priority: 1, // 提取优先级为1
                },
                commons: { // 提取页面公共代码
                    name: 'commons', // 提取文件命名为commons
                    minChunks: 2, // 只要使用两次就提取出来
                    chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
                    minSize: 0, // 提取代码体积大于0就提取出来
                }
            }
        }
    }
})
