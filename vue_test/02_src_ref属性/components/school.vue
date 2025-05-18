<template>
    <div>
        <h2>名称：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="showInfo">点我显示学校名称</button>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            showInfo() {
                console.log(this.name)
            }
        }
    }
</script>