<template>
  <div
    class="c-avatar"
    :class="{ 'c-avatar--vertical': direction === 'vertical' }"
  >
    <img :src="url" alt="" class="c-avatar__img" circle />
    <span
      class="c-avatar__span"
      :class="{ 'c-avatar__span--vertical': direction === 'vertical' }"
      :style="'fontSize:' + size"
      >{{ text }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'CAvatar',
  props: {
    direction: {
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      },
    },
    url: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 12,
    },
    text: [String],
  },
}
</script>

<style scoped lang="scss">
@include b(c-avatar) {
  @include box-center($align: center);
  @include m(vertical) {
    flex-direction: column;
  }
  @include e(span) {
    @include ellipsis(1); // 1行省略号
    @include m(vertical) {
      text-align: center;
    }
  }
}
</style>
