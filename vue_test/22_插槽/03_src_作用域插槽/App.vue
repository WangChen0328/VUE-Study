<template>
    <div class="container">
      <Category title="游戏">
        <template slot-scope="{game}">
          <ul>
              <li v-for="(item, index) in game" :key="index">{{ item }}</li>
          </ul>
        </template>
      </Category>

      <Category title="游戏">
        <template slot-scope="{game}">
          <ol>
              <li v-for="(item, index) in game" :key="index">{{ item }}</li>
          </ol>
        </template>
      </Category>

      <Category title="游戏">
        <template slot-scope="{msg}">
          <h4 v-for="(item, index) in msg" :key="index">{{ item }}</h4>
        </template>
      </Category>
    </div>
</template>

<script>
  import Category from './components/Category';
  export default {
      name: 'App',
      components: {
        Category
      }
  }
</script>

<style scoped>
  .container, .foot {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
  h4 {
    text-align: center;
  }
</style>
