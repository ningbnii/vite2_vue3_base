# Vue 3 + Vite2

## 安装测试

```
// 进入目录
yarn
// 启动server
yarn dev
// 打包
yarn build
```

## 更新记录

- 自动化路由
- 封装 axios，支持 JWT
- 封装 localStorage
- 移动端适配 postcss 插件 postcss-px2vp
- 组件库使用 vant
- 配置 server，添加 ip 访问
- title 动态修改

```
<script setup>
import { useMeta } from "vue-meta";
useMeta({
  title: "用户中心",
});
</script>
```

- 添加开发环境和生成环境中 base 的区分，生产环境.env，开发环境.env.production
- 使用 sass
- normalize.css
- layout 布局
- mock，直接在/mock 文件夹下面，创建对应的文件，添加需要的 mock 数据就可以
- svgicon，https://iconpark.oceanengine.com/home
- vant 组件自动导入
