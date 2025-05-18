<template>
    <div class="student"> 
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <button @click="sendName">点击发送给学校，学生姓名</button>
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
            }
        },
        methods: {
            sendName() {
                this.$bus.$emit('getStudentName', this.name)
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