

//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'


//导入页面组件
import cart from '../components/cart/cart.vue'
import home from '../components/home/home.vue'
import search from '../components/search/search.vue'
import vip from '../components/vip/vip.vue'

//安装路有插件
Vue.use(VueRouter)


//创建路由实例
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/cart', component: cart},
        {path: '/search', component: search},
        {path: '/vip', component: vip}
    ],
    linkActiveClass: 'mui-active'
    
})

//导出路由对象
export default router












