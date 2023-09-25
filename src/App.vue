<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | 微信部落` : `微信部落` }}</template>
  </metainfo>
  <router-view v-slot="{ Component }">
    <vue-page-stack>
      <component :is="Component" :key="$route.fullPath" />
    </vue-page-stack>
  </router-view>
</template>
<script setup>
import { useMeta } from 'vue-meta'
useMeta({
  title: '',
})
</script>
<style lang="scss"></style>
