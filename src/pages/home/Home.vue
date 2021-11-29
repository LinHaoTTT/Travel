<template>
  <!--template只能暴露一个根标签，得设置一个div包裹住可使用-->
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  export default{
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>
<style>

</style>
