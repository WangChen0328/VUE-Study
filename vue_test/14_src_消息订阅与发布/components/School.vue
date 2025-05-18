<template>
    <div class="school"> 
        <h2>学校姓名：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';
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
            getStudentName(msgName, data) {
                console.log('School获得学生姓名:', data)
            }
        },
        mounted() {
            this.pubId = pubsub.subscribe('studentName', this.getStudentName)
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped> 
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>