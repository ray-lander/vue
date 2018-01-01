<template>
<div class="news">
    <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id " class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="tit" v-text="item.title"></p>
							<p class="s-tit">
                                <span>发表时间：{{item.add_time | date}}</span>
                                <span>点击次数：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>

</div>


</template>

<script>
export default {
    data(){
        return {
            list: []
        }

    },
    //钩子函数
    created() {

    this.getNewsList()

    },

    methods: {
        getNewsList(){
            this.$http
                .get('http://vue.studyit.io/api/getnewslist')
                .then(res => {
                    // console.log(res)
                    const data = res.data
                    if(data.status === 0){
                        this.list = data.message
                    }
                })

        }
    }



  
}
</script>

<style>
.mui-media-body .tit {
    color: #000;
    font-size: 16px;
}
.mui-media-body .s-tit {
    display: flex;
    justify-content: space-around;
}
.mui-media-body p span {
    color:royalblue;
    font-size: 12px;
    margin-top: 10px;
}

</style>
