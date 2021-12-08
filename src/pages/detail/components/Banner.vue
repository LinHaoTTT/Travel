<template>
  <div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg">
    <div class="banner-info">
      <div class="banner-tittle">
        海南三亚AAAAA级风景区
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xeac4;</span>
        39
      </div>
    </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"

    >

    </common-gallary>
  </div>
</template>
<script>
  import CommonGallary from 'common/gallary/Gallary'
export default {
  name:'DetailBanner',
  data() {
    return {
      showGallary: false,
      imgs:['https://imgs.qunarzz.com/vs_ceph_b2c_001/d8c38d90-3808-40ca-aeec-50eaa00fe91b.jpg_r_390x260x95_50ee1e90.jpg',
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/78ebf2c4-5ff1-41de-bc76-fe9bb2e7d2af.jpg_r_390x260x95_8721be73.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display:flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0),rgba(0,0,0,0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number

        height: .32rem
        line-height: .32rem
        border-radius:.2rem
        margin-top: .14rem
        padding: 0 .4rem
        background: rgba(0,0,0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
