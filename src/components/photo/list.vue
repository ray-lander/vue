<template>
  <div class="photo_container">
    <div>
    <div class="mui-slider mui-fullscreen">
			<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
          <!-- :class="{}" 动态添加类 -->
          <a href="#" class="mui-control-item" :class="{ 'mui-active': item.id === 0 }" v-for="item in catList" :key="item.id">
						{{ item.title }}
					</a>
        </div>
			</div>
		</div>

		<!-- 图片列表 -->
		<ul class="category-img-list">
      <li class="img-list-item" v-for="item in imglist" :key="item.id" @click="goInfo(item.id)">
        <img v-lazy="item.img_url"> 
        <div>
          <h2>{{item.title}}</h2>
          <p>{{item.zhaiyao}}</p>
        </div>
      </li>      
    </ul>
  </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui'
export default {
  
  data(){
    return {
      catList: [],

      imglist: []
    }
  },
  //钩子函数
  mounted(){
    //tap栏滑动
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })

    this.getimgcate()
    this.getimglist()
  },

  methods: {
    //获取分类列表数据
    getimgcate(){
      this.$http
        .get('http://vue.studyit.io/api/getimgcategory')
        .then( res => {
          // console.log(res)
          const data = res.data
          if(data.status === 0){
            //在导航菜单前面加一个全部菜单
            data.message.unshift({id: 0, title: '全部'})
            this.catList = data.message
          }
        })
    },
    //获取图片列表数据
    getimglist(id = 0) {
      this.$http
        .get(`http://vue.studyit.io/api/getimages/${id}`)
        .then(res => {
          console.log(res)
          const data = res.data
          if(data.status === 0){
            this.imglist = data.message           
          }
        })
    },
    //编程式导航
    goInfo(id){
      this.$router.push({name: 'photoinfo', params: {id}})
    }


  }  
}
</script>

<style lang="scss">

  .mui-slider-indicator.mui-segmented-control {
  background-color: #fff;
}

.mui-fullscreen {
  position: fixed;
  top: 40px;
  height: 38px;
}

/* scroll滚动警告的处理方式参考：http://www.jianshu.com/p/baf61adc8667 */
* {
  touch-action: none;
}

.category-img-list {
  list-style: none;
  padding: 5px;
  padding-top: 30px;

  .img-list-item {
    position: relative;
    margin-bottom: 5px;

    div {
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;

      h2 {
        font-size: 16px;
      }

      p {
        color: #fff;
        margin-bottom: 0px;
      }
    }

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>

