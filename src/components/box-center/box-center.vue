<template>
  <div class="c-box-center" font-tertiary>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBoxCenter',
}
</script>

<style scoped lang="scss">
@include b(c-box-center) {
  @include box-center;
}
</style>
