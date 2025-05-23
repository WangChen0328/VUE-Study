//该文件专门用于创建整个应用的路由器
import About from "../components/About";
import Home from "../components/Home";
import VueRouter from "vue-router";

//创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})