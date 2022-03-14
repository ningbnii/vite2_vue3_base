<template>
  <div class="view-container">
    <div class="pane">
      <div class="scroll-content">
        <div class="scroll"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMeta } from 'vue-meta'
useMeta({
  title: '用户中心',
})
</script>
<style lang="scss">
.view-container {
  display: block;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: pink;
}
.pane {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.scroll-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  padding-top: 1px;
  margin-bottom: -1px;
}
.scroll {
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
}
</style>
