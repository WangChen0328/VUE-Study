<template>
    <div class="student"> 
        <h2 @click="showName">学校姓名：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    //import { hunhe, hunhe2 } from '../mixin';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        //mixins: [hunhe, hunhe2]
    }
</script>

<style>
    .student {
        background-color: gray;
    }
</style>