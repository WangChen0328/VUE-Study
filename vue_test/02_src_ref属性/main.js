//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
//关闭Vue的生成提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})