<template>
  <div class="info_talk">
            <h2>发表评论</h2>
            <textarea cols="3" rows="5" placeholder="请输入内容"></textarea>
            <mt-button type="primary" size="large">发表评论</mt-button>
            <p>
                <span>第一楼</span>
                <span>用户：匿名用户</span>
                <span>时间：2018.1.1</span>
            </p>
            <div class="talk_content">
                这是小黄的评论
            </div>
            <mt-button plain size="large">加载更多</mt-button>
        </div>  

</template>

<script>
export default {};
</script>

<style lang="scss">
.info_talk {
  padding: 5px;
  p {
    background-color: #ccc;
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
    span {
      color: #000;
    }
  }
  .talk_content {
    margin: 20px;
  }
}
</style>
