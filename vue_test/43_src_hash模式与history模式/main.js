//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
//引入ElementUI
import ElementUI from 'element-ui';
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

//关闭Vue的生成提示
Vue.config.productionTip = false
//应用ElementUI
Vue.use(ElementUI);


new Vue({
    el: '#app',
    render: h => h(App)
})
