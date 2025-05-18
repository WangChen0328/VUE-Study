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
        }
    }
</script>

<style>

</style>