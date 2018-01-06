<template>
  
    <div class="photo-info">
    <header>
      <h2 class="title" v-text="imgInfo.title"></h2>
      <p class="mui-ellipsis">
        <span>发表时间：{{imgInfo.add_time | date}}</span>
        <span>点击次数：{{ imgInfo.click }}次</span>
      </p>
    </header>
    <div class="thumb-img">      
      <img class="preview-img" v-for="(item, index) in thumImgList" :src="item.src" height="100" @click="$preview.open(index, thumImgList)" :key="index">
    </div>
    <div class="content"></div>

    <!-- 评论组件 -->
    <common></common>
  </div>

</template>

<script>
import common from '../common/common.vue'

export default {
  data(){
    return {      
      imgInfo: {},
      thumImgList: []
    }
  },
  //钩子函数
  created() {
    this.getImgInfo()
    this.getThumImgList()
    
  },
  methods: {
    getImgInfo(){
      this.$http
        .get(`http://vue.studyit.io/api/getimageInfo/${this.$route.params.id}`)
        .then(res => {
          const data = res.data
          // console.log(data)
          if(data.status === 0) {
            this.imgInfo = data.message[0]
          }
      })
    },

    //获取图片略缩图
    getThumImgList(){
      this.$http
        .get(`http://vue.studyit.io/api/getthumimages/${this.$route.params.id}`)
        .then(res => {
          const data = res.data
          console.log(data)

          if(data.status === 0){
            this.thumImgList = data.message.map(item => ({
              src: item.src,
              w: 600,
              h: 400
            }))
          }
        })
    }
  },

  components: {common}
  
} 
</script>

<style lang="scss">
.photo-info {
  padding-left: 3px;
  padding-right: 3px;

  .thumb-img {
    border-top: 1px solid #ccc;

    img {
      margin: 9px;
      box-shadow: 0 0 15px #ccc;
    }
  }

  .title {
    font-size: 18px;
    color: #26a2ff;
    text-align: center;
  }

  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
  }

  .content {
    font-size: 14px;
    line-height: 28px;
    padding-top: 20px;
  }
}

</style>

