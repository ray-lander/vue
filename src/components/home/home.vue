<template>
  <div class="home">
    
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="item.url">
      </mt-swipe-item>          
    </mt-swipe>

    <!-- 九宫格菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-1"></span>
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
              <span class="mui-icon mui-icon-2"></span>
              <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-3"></span>
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-4"></span>
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-5"></span>
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon mui-icon-6"></span>
              <div class="mui-media-body">联系我们</div></a></li>
    </ul>

  </div>
</template>
<script>

export default {
   // 提供数据
  data() {
    return {
      list: []
    }
  },

  //钩子函数
  created() {
    this.$http
    .get('http://vue.studyit.io/api/getlunbo')
    .then(res => {
      // console.log(res)
      
      const data = res.data
      if(data.status === 0){
        this.list = data.message
      }
      
    })
    
  }
}

</script>

<style lang="scss">

.mint-swipe {
    height: 180px;
  }

  .mint-swipe-item img {
    width: 100%;
  }

  .mui-table-view-cell .mui-media {
    border: 0;    
  } 

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
      .mui-tabel-view-cell {
      border: 0;
    }
   
  }
  
  
  .mui-icon {
    height: 60px;
    width: 60px;
    background-size: cover;
  }
  .mui-icon-1 {
    background-image: url(../../assets/images/menu1.png);
  }
  .mui-icon-2 {
    background-image: url(../../assets/images/menu2.png);
  }
  .mui-icon-3 {
    background-image: url(../../assets/images/menu3.png);
  }
  .mui-icon-4 {
    background-image: url(../../assets/images/menu4.png);
  }
  .mui-icon-5 {
    background-image: url(../../assets/images/menu5.png);
  }
  .mui-icon-6 {
    background-image: url(../../assets/images/menu6.png);
  }
  

</style>
