
import moment from 'moment'

import Vue from 'vue'

//注册全局过滤器
Vue.filter('date', function(input, format='YYYY-MM-DD HH:mm:ss'){
    return moment(input).format(format)

})
