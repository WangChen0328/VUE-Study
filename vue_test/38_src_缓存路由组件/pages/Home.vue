<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 缓存的是组件名 {name: 'News'} -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        mounted() {
          console.log('挂载Home组件')
        },
        beforeDestroy() {
          console.log('销毁Home组件')
        }
    }
</script>

<style>

</style>