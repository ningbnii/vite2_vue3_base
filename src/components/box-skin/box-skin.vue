<template>
  <div class="c-box-skin" :class="type ? 'c-box-skin--' + type : ''" bg-secondary>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBoxSkin',
  props: {
    type: {
      // 只能设置top或者bottom
      validator: (value) => {
        return ['top', 'bottom'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style scoped lang="scss">
@include b(c-box-skin) {
  @include m(top) {
    border-top: $border-base;
  }
  @include m(bottom) {
    border-bottom: $border-base;
  }
}
</style>
