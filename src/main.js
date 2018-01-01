
//项目的入口js文件

//导入vue
import Vue from 'vue'

//导入app组件
import App from './App.vue'

// 导入 mui的样式
import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

import './assets/css/app.css'


//导入ajax
import axios from 'axios'

//非vue的插件都要添加的vue原型中去
Vue.prototype.$http = axios


//导入路由
import router from './router'

// 导入 mint-ui 组件
import { Header, Button, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//渲染组件
const vm = new Vue({
    el: '#app',
    router,

    render: c => c(App),

  
})


