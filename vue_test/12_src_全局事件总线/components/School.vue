<template>
    <div class="school"> 
        <h2>学校姓名：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
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
            getStudentName(studentName) {
                console.log('School获得学生姓名:', studentName)
            }
        },
        mounted() {
            this.$bus.$on('getStudentName', this.getStudentName)
        },
        beforeDestroy() {
            this.$bus.$off('getStudentName')
        }
    }
</script>

<style scoped> 
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>