<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{ message.title }}</router-link> -->
                
                <!-- 跳转路由并携带params参数，to的对象写法 !!!只能用name 不能用path -->
                <router-link :to="{
                    name: 'xiangxi',
                    query: {
                        id: message.id,
                        title: message.title
                    }
                }">
                    {{ message.title }}
                </router-link>
                <button @click="pushShow(message.id, message.title)">push查看</button>
                <button @click="replaceShow(message.id, message.title)">replace查看</button>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Message',
        data() {
            return {
                messageList: [
                    {id: '001', 'title': '消息01'},
                    {id: '002', 'title': '消息02'},
                    {id: '003', 'title': '消息03'}
                ]
            }
        },
        methods: {
            pushShow(id, title){
                this.$router.push({
                    name: 'xiangxi',
                    query: {
                        id,
                        title
                    }
                })
            }, 
            replaceShow(id, title) {
                this.$router.replace({
                    name: 'xiangxi',
                    query: {
                        id,
                        title
                    }
                })
            }
        }
    }
</script>

<style>

</style>