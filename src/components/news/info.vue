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
        <div class="info_talk">
            <h2>发表评论</h2>
            <textarea cols="3" rows="5" placeholder="请输入内容" v-model="content"></textarea>
            <mt-button type="primary" size="large" @click="sendComment">发表评论</mt-button>
                <div class="talk_item" >
                    
                        <div v-for="(item, index) in list" :key="index">
                            <p>
                                <span>第{{index + 1}}楼</span>
                                <span>用户：{{item.user_name}}</span>
                                <span>时间：{{item.add_time | date}}</span>
                            </p>
                            <p class="talk_content">
                                {{item.content}}
                            </p>
                        </div>
                    
                    <mt-button plain size="large">加载更多</mt-button>
                </div>
                    
                
        </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},

      list: [],

      content: "",

      curPage: 1
    };
  },

  //钩子函数
  created() {
    this.getNewsInfoById();
    this.getCommonts();
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
    },
    //获取评论列表数据
    getCommonts() {
      this.$http
        .get(
          `http://vue.studyit.io/api/getcomments/${this.$route.params
            .id}?pageindex=${this.curPage}`
        )
        .then(res => {
          console.log(res);
          const data = res.data;
          if (data.status === 0) {
            this.list = data.message;
          }
        });
    },
    //提交评论的方法
    sendComment() {
      this.$http
        .post(
          `http://vue.studyit.io/api/postcomment/${this.commentId}`,
          `content=${this.content}`
        )

        .then(res => {
          console.log(res);
          const data = res.data;
          if (data.status === 0) {
            alert("评论提交成功");
          }
        });
    }
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
  .info_talk {
    //   margin-top: 10px;
    padding: 5px;

    p {
      background-color: #ccc;
      display: flex;
      justify-content: space-around;
      margin-top: 8px;
      box-sizing: border-box;
      span {
        color: #000;
        font-size: 16px;
      }
    }
    .talk_content {
      background-color: #fff;
      margin: 10px;
      justify-content: space-between;
      color: #000;
      font-size: 18px;
    }
  }
}
</style>

