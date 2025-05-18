<template>
    <div class="student"> 
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="updateAge">尝试修改年龄</button>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        data() {
            return {
                msg: '我是一个尚硅谷的学生',
                myAge: this.age //外部数据的优先级，高于自己定义的属性
            }
        },
        methods: {
            updateAge() {
                this.myAge ++
            }
        },  
        //简单声明接收
        props: ['name', 'age', 'gender'] 

        //接收的同时进行类型限制
        // props: {
        //     name: String,
        //     age: Number,
        //     gender: String
        // }

        // props: {
        //     name: {
        //         type: String,
        //         required: true
        //     },
        //     age: {
        //         type: Number,
        //         default: 99
        //     },
        //     gender: {
        //         type: String,
        //         reguired: true
        //     }
        // }
    }
</script>

<style>
    .student {
        background-color: gray;
    }
</style>