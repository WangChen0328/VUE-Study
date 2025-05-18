<template>
    <ul>
        <h2 :style="{opacity}">欢迎学习Vue</h2>
        <li>news001 <input type="text"> </li>
        <li>news002 <input type="text"> </li>
        <li>news003 <input type="text"> </li>
    </ul>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'News',
        data() {
            return {
                opacity: 0
            }
        },
        //路由激活时触发
        activated() {
            this.timer =
                setInterval(() => {
                    this.opacity -= 0.01
                    if(this.opacity <= 0) {
                        this.opacity = 1;
                    }
                }, 16)
        },
        //路由失活时触发
        deactivated() {
            clearInterval(this.timer);
        },
        //(最先) 全局前置路由守卫
        //(中间) 独享路由守卫
        //(第三) 通过路由规则，进入该组件时被调用
        //(最后) 全局后置路由守卫
        beforeRouteEnter(to, from, next) {
            console.log('通过路由规则，进入该组件时被调用')
            next()
        },
        //(第一) 通过路由规则，离开该组件时被调用
        //(最先) 全局前置路由守卫 -- 实际已经是下一个路由的配置
        //(中间) 独享路由守卫    -- 实际已经是下一个路由的配置
        //(最后) 全局后置路由守卫 -- 实际已经是下一个路由的配置
        beforeRouteLeave(to, from, next) {
            console.log('通过路由规则，离开该组件时被调用')
            next()
        }        
    }
</script>

<style>

</style>