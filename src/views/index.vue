<template>
  <div>入口</div>
  <div>
    <van-button type="primary" size="small" :to="{ path: '/index/index' }"
      >跳转/index/index</van-button
    >
  </div>

  <div class="mt-1">
    <van-button type="primary" size="small" :to="{ path: '/index/home' }"
      >跳转/index/home</van-button
    >
  </div>
  <div class="content">
    <p>hello</p>
  </div>
  <input type="text" />
  <button type="">hello</button>

  <div class="header" circle>hello world</div>
  <a href="https://www.baidu.com" fz30 ml5>百度</a>
  <van-row>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
  </van-row>

  <div>
    <config
      theme="multi-color"
      size="24"
      :fill="['#b37d7d', '#f5a623', '#FFF', '#b8e986']"
      strokeLinejoin="bevel"
      strokeLinecap="square"
    />
  </div>
</template>
<script>
import { Config } from '@icon-park/vue-next'
export default {
  components: { Config },
}
</script>
<script setup>
import { getUserInfo } from '@/api/user'

// 请求接口demo
getUserInfo().then(function (res) {
  console.log(res)
})
</script>
<style lang="scss" scoped>
.content {
  width: 750px;
  height: 200px;
  background: url(../assets/logo.png);

  p {
    color: red;
  }
}
.header {
  width: 200px;
  height: 200px;
  background: rgba(#000, 0.4);
  color: $color-primary;
  @include box-center(center, center);
}
</style>
