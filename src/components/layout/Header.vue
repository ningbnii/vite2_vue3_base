<template>
  <section class="c-header" :class="{ 'c-header--fixed': fixed }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
@include b(c-header) {
  @include m(fixed) {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 10;
  }
}
</style>
