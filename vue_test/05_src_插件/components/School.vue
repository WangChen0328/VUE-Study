<template>
    <div class="student"> 
        <h2>学校姓名：{{ name }}</h2>
        <h2>学校地址：{{ address | mySlice}}</h2>
        <input type="text" v-full-bind:value="n">
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京1234',
                n: '你好'
            }
        },
    }
</script>

<style>
    .student {
        background-color: gray;
    }
</style>