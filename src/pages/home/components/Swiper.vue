<template>
  <div class="wrapper">
    <swiper :options ="swiperOptions">
      <swiper-slide v-for = "item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class ="swiper-pagination" slot ="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions:{
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList:[{
        id:'0001',
        imgUrl:'https://dimg04.c-ctrip.com/images/0zg15120008xs5j949E6F.jpg'
      },{
        id:'0002',
        imgUrl:'https://dimg04.c-ctrip.com/images/0zg621200092muwxv0824.jpg'
      }]
    }
  },
}
</script>
<style lang="stylus" scoped>

  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 16.208%
    background: #eee


    .swiper-img
      width: 100%
</style>
