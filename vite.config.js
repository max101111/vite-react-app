import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
// import styleImport from 'vite-plugin-style-import'
import viteImagemin from 'vite-plugin-imagemin'

import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'

const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),
    viteImagemin({
        gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
        },
        optipng: {
            optimizationLevel: 7,
        },
        mozjpeg: {
            quality: 20,
        },
        pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
        },
        svgo: {
            plugins: [
                {
                    name: 'removeViewBox',
                },
                {
                    name: 'removeEmptyAttrs',
                    active: false,
                },
            ],
        },
    }),
    vitePluginImp({
        libList: [
            {
                libName: "antd",
                style: (name) => `antd/lib/${name}/style/index.less`,
            },
        ],
    })],
    css: {
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                // 重写 less 变量，定制样式
                modifyVars: themeVariables
            }
        }
    },
    server: {
        // port: 3001, // 开发环境启动的端口
        proxy: {
            '/api': {
                // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
                target: 'http://47.99.134.126:28019/api/v1',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
            }
        }
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './'), // 根路径
            '@': path.resolve(__dirname, 'src'), // src 路径
        }
    }
})
