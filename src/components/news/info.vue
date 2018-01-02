<template>
  <div class="news_info">
      <div class="info_tit">
          <h3>{{info.title}}</h3>
          <p>
              <span>发表时间：{{info.add_time | date}}</span>
              <span>点击次数：{{info.click}}次</span>
          </p>
      </div>
      <div class="info_content" v-html="info.content"></div>
        <!-- 评论区域 -->
        <common :commonId="info.id"></common>
  </div>
</template>

<script>

//导入评论组件
import common from '../common/common.vue'

export default {
  data() {
    return {
      info: {},

      isLoaded: false
    };
  },

  //钩子函数
  created() {
    this.getNewsInfoById();
   
  },

  //获取数据的方法
  methods: {
    getNewsInfoById() {
      this.$http
        .get(`http://vue.studyit.io/api/getnew/${this.$route.params.id}`)
        .then(res => {
          //   console.log(res);
          const data = res.data;
          if (data.status === 0) {
            this.info = data.message[0];
          }
        });
    }  
  },

  //注册组件
  components: {
    common
  }

};
</script>

<style lang="scss">
.news_info {
  .info_tit {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #ccc;

    p {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      span {
        color: mediumblue;
      }
    }
  }
  .info_content {
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
    img {
      width: 100%;
    }
  }
  
}
</style>

