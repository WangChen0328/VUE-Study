<template>
    <div class="app">
        <h1>{{ msg }}，学生姓名是: {{ studentName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据 (第一种写法) v-on: 或 @-->
        <!-- <Student @getStudentName="getStudentName"/> -->

        <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据 (第二种写法)-->
        <Student ref="student" @click.native="demo"/>
    </div>
</template>

<script>
    import Student from './components/Student'
    import School from './components/School'
    
    export default {
        name: 'App',
        data() {
            return {
                msg: '你好啊',
                studentName : ''
            }
        },
        methods: {
            getSchoolName(name) {
                console.log(name)
            },
            getStudentName(name, ...params) {
                console.log(name, params)
                this.studentName = name
            },
            demo() {
                alert('.native表示原生事件')
            }
        },
        components: {
            Student,
            School
        },
        mounted() {
            this.$refs.student.$on('getStudentName', this.getStudentName)
            //this.$refs.student.$once('getStudentName', this.getStudentName)
        }    
    }
</script>

<style scoped>
    .app {
        background-color: gray;
    }
</style>