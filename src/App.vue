<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | 微信部落` : `微信部落`
    }}</template>
  </metainfo>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue'
import { useMeta } from 'vue-meta'
useMeta({
  title: '',
})
onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', 'default')
})
</script>
<style lang="scss"></style>
