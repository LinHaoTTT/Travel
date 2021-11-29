<template lang="">
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl">
          </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',

  data() {
    return{
      recommendList:[{
        id:'0001',
        imgUrl:'//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',
        title:'含往返飞机票(含税)+4晚住宿',
        desc:'潮玩海陆空：蜈支洲岛畅玩一整天+亚龙湾热带天堂森林公园|直升机体验+帆船出海两小时激情玩海之旅（三亚连住180°海景房）'

      },{
        id:'0002',
        imgUrl:'//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',
        title:'含往返飞机票(含税)+4晚住宿',
        desc:'潮玩海陆空：蜈支洲岛畅玩一整天+亚龙湾热带天堂森林公园|直升机体验+帆船出海两小时激情玩海之旅（三亚连住180°海景房）'

      },{
        id:'0003',
        imgUrl:'//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',
        title:'含往返飞机票(含税)+4晚住宿',
        desc:'潮玩海陆空：蜈支洲岛畅玩一整天+亚龙湾热带天堂森林公园|直升机体验+帆船出海两小时激情玩海之旅（三亚连住180°海景房）'

      }]
    }
  },
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top:.2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom:65.5%
    .item-img
      width:100%
  .item-info
    padding: .1rem
  .item-title
    line-height:.54rem
    font-size:.32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
