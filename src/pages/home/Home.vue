<template>
  <!--template只能暴露一个根标签，得设置一个div包裹住可使用-->
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  export default{
    name:'Home',
    components:{
      HomeHeader
    }
  }
</script>
<style>

</style>
