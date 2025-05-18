<template>
    <div class="student"> 
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <h2>{{ n }}</h2>
        <button @click="sendStudentName">把学生名给APP</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>
        <button @click.stop="add">测试销毁后原生事件是否有效 +1</button>
    </div>
</template>

<script>

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        data() {
            return {
                name: '张三',
                gender: '男',
                n: 0
            }
        },
        methods: {
            sendStudentName() {
                //触发Student组件实例身上的atguigu事件
                this.$emit('getStudentName', this.name, 1, 2, 3)
            },
            unbind(){
                //this.$off('getStudentName')//解绑一个自定义事件
                //this.$off(['getStudentName'])//解绑多个自定义事件
                this.$off()//解绑所有自定义事件
            },
            death() {
                this.$destroy() //销毁当前的组件实例, 原生和自定义事件都失效
            },
            add() {
                console.log('点击~~')
                this.n++
            }
        }
    }
</script>

<style scoped>
    .student {
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>