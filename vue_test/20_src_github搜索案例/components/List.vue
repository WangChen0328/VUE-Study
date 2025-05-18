<template>
    <div>
        <div class="row">
            <!-- 展示用户列表 -->
            <div v-show="userList.length" class="card" v-for="user in userList" :key="user.id">
                <a :href="user.html_url" target="_blank">
                    <img :src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{ user.login }}</p>
            </div>
            <!-- 展示欢迎词 -->
            <h1 v-show="isFirst">欢迎使用</h1>
            <!-- 展示加载中 -->
            <h1 v-show="isLoading">加载中。。。。</h1>
            <!-- 展示错误信息 -->
            <h1 v-show="errMsg">{{ errMsg }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'List',
        data() {
            return {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                userList: []
            }
        },
        mounted() {
            this.$bus.$on('loading', () => {
                this.isLoading = true
                this.isFirst = false
                this.errMsg = ''
            })
            this.$bus.$on('getData', (result) => {
                this.userList = result
                this.isFirst = false
                this.isLoading = false
                this.errMsg = ''
            })
            this.$bus.$on('error', (errMsg) => {
                this.errMsg = errMsg
                this.isFirst = false
                this.isLoading = false
            })
        }
    }
</script>

<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>