<template>
<div class="common">
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
import { Toast } from "mint-ui";

export default {

  //接收父组件传来的数据
  props:['commonId'],

  data() {
    return {
      info: {},

      list: [],

      content: "",

      curPage: 1
    };
  },

  //钩子函数
  created(){
    //判断如果有传过来的commonId之后再获取评论列表
    if(this.commonId){
      this.getCommonts()
    }
  },
  //监视数据

  watch: {
    commonId (curVal){
      this.getCommonts()
    }
  },

 
  methods :{
     //获取评论列表数据
     getCommonts() {
    this.$http
      .get(
        `http://vue.studyit.io/api/getcomments/${this.commonId}?pageindex=${this.curPage}`
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
    //检验用户输入是否为空
    if (this.content.trim() === "") {
      return Toast({
        message: "请输入评论内容",
        duration: "2000"
      });
    }
    //发送ajax请求
    this.$http
      .post(
        `http://vue.studyit.io/api/postcomment/${this.commonId}`,
        `content=${this.content}`
      )
      .then(res => {
        console.log(res);
        const data = res.data;
        if (data.status === 0) {
          //提示评论提交成功
          Toast({
            message: data.message,
            duration: 1000
          });
          //添加到评论列表
          this.list.unshift({
            add_time: new Date(),
            content: this.content,
            user_name: "ray"
          });
          this.content = "";
        }
      });
  }

  }
 
};
</script>

<style lang="scss">
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
</style>
