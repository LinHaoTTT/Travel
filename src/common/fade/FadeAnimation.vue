<template>
  <transition>
    <!--插槽，在注册页面中slot就是common-gallary-->
    <slot></slot>

  </transition>
</template>
<script>
export default {
  name: 'FadeAnimation'

}
</script>
<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity:0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
