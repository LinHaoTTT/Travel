<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
  import DetailBanner from './components/Banner.vue'
  import DetailHeader from './components/Header.vue'
  import DetailList from './components/List.vue'
  import axios from 'axios'
export default {
  //name作用:1、使用递归组件时需要name名字。
  //2、取消某个页面缓存时需要用到。如exclude="Detail"
  //3、使用vue插件时可以显示每个组件的名字
  name:'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs:[],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('./api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if( res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo ()
  },
}
</script>
<style lang="stylus" scoped>
  .content
    height: 50rem

</style>
