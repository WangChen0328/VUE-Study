<template>
    <div class="student"> 
        <h2 @click="hello">学生姓名：{{ name }}</h2>
        <h2 @click="showName">学生性别：{{ gender }}</h2>
    </div>
</template>

<script>

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        data() {
            return {
                name: '张三',
                gender: '男'
            }
        },
    }
</script>

<style>
    .student {
        background-color: gray;
    }
</style>