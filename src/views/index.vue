<template>
  <div>入口</div>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>
  <div class="content">
    <p>hello</p>
  </div>
</template>
<script setup>
import { getUserInfo } from "../api/user";
// 请求接口demo
getUserInfo({ id: 1 }).then(function (res) {
  console.log(res);
});
</script>
<style lang="less" scoped>
.content {
  width: 750px;
  background-color: green;
  p {
    color: red;
  }
}
</style>
