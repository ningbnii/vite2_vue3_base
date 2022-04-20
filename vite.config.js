import { defineConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import px2vp from 'postcss-px2vp'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

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
      // 别名
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
          // 将 px 单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.
          // vant的设计稿宽度是375，默认的设计稿是750
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
      // 组件自动导入
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 3000,
      https: false,
      open: true,
    },
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
        },
      },
    },
  }
})
