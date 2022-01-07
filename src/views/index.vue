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
</template>
<script setup>
// import { getUserInfo } from "../api/user";
// 请求接口demo
// getUserInfo({ id: 1 }).then(function (res) {
//   console.log(res);
// });
</script>
<style lang="less" scoped>
.content {
  width: 750px;
  height: 200px;
  background: url(../assets/logo.png);

  p {
    color: red;
  }
}
</style>
