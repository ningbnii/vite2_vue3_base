<template>
  <div class="c-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    text: {
      type: String,
      require: true, // 文字必须的
    },
  },
}
</script>

<style scoped lang="scss">
@include b(c-button) {
  @include box-center;
  color: $color-text-tertiary;
}
</style>
