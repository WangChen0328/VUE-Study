<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方的Dom元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from './components/school'

    export default {
        name: 'App',
        data() {
            return {
                msg: '欢迎学习Vue'
            } 
        },
        methods: {
            showDom() {
                console.log(this.$refs.title)//真实dom
                console.log(this.$refs.btn)//真实dom
                console.log(this.$refs.sch)//组件School的实例对象(vc)
            }
        },
        components: {
            School
        }    
    }
</script>