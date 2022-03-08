import { defineConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import px2vp from 'postcss-px2vp'
import { resolve } from 'path'

const vantStyleImport = () => {
  const libraryName = 'vant'
  return styleImport({
    libs: [
      {
        libraryName,
        esModule: true,
        resolveStyle(name) {
          return `${libraryName}/es/${name}/style`
        },
      },
    ],
  })
}

export default defineConfig(({ mode, command }) => {
  const prodMock = true
  return {
    base: loadEnv(mode, process.cwd()).VITE_BASEURL,
    resolve: {
      // alias: [
      //   {
      //     find: '@',
      //     replacement: resolve(__dirname, 'src'),
      //   },
      // ],
      alias: {
        '@': resolve('./src'),
      },
    },
    // 大佬方案https://juejin.cn/post/6961737808339795975
    css: {
      // 指定传递给css预处理器的选项，加载全局变量，方法，mixin
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/style/settings/var.scss";
          @import "@/style/tools/_sassMagic.scss";
          `,
        },
      },
      postcss: {
        plugins: [
          px2vp({
            viewportWidth(rule) {
              const file = rule.source?.input.file
              if (file?.includes('vant')) return 375
              return 750
            },
          }),
        ],
      },
    },
    plugins: [
      vue(),
      vantStyleImport(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 3000,
      https: false,
    },
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
  }
})
