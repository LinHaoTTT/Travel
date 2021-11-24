<template>
  <!--template只能暴露一个根标签，得设置一个div包裹住可使用-->
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  export default{
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper
    }
  }
</script>
<style>

</style>
