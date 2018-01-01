<template>
  <div class="home">
    
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="item.url">
      </mt-swipe-item>          
    </mt-swipe>
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
      console.log(res)
      
      const data = res.data
      if(data.status === 0){
        this.list = data.message
      }
      
    })
    
  }
}

</script>

<style>
.mint-swipe {
    height: 180px;
  }

  .mint-swipe-item img {
    width: 100%;
  }

</style>
