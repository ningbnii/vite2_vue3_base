<template>
  <main class="c-content">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'CContent',
}
</script>

<style scoped lang="scss">
@include b(c-content) {
  overflow: auto;
  flex: 1;
}
</style>
