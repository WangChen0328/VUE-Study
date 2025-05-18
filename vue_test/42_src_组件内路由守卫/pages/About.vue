<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'About',
        mounted() {
          console.log('挂载About组件')
        },
        beforeDestroy() {
          console.log('销毁About组件')
        }
    }
</script>

<style>

</style>