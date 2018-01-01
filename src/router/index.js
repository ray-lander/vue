

//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'


//导入页面组件
import cart from '../components/cart/cart.vue'
import home from '../components/home/home.vue'
import search from '../components/search/search.vue'
import vip from '../components/vip/vip.vue'

import newslist from '../components/news/list.vue'
import newsinfo from '../components/news/info.vue'

import photolist from '../components/photo/list.vue'
import photoinfo from '../components/photo/info.vue'

//安装路有插件
Vue.use(VueRouter)


//创建路由实例
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/cart', component: cart},
        {path: '/search', component: search},
        {path: '/vip', component: vip},

        //配置新闻组件
        {path: '/home/newslist', component: newslist},
        {path: '/home/newsinfo/:id', component: newsinfo},
        
        //配置图片展示组价
        {path: '/home/photolist', component: photolist},
        {path: '/home/photoinfo/:id', component: photoinfo},
        

    ],
    linkActiveClass: 'mui-active'
    
})

//导出路由对象
export default router












