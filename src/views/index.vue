<template>
  <div>入口</div>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script setup>
import { getUserInfo } from "../api/user";
getUserInfo({ id: 1 }).then(function (res) {
  console.log(res);
});
</script>
<style lang=""></style>
