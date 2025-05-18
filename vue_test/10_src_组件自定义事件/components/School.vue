<template>
    <div class="school"> 
        <h2>学校姓名：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">把学校名给APP</button>
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
            sendSchoolName() {
                this.getSchoolName(this.name)
            }
        },
        props: ['getSchoolName']
    }
</script>

<style scoped> 
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>