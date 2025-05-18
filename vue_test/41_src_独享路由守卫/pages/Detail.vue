<template>
  <ul>
    <li>消息编号: {{ id }}</li>
    <li>消息名称: {{ title }}</li>
  </ul>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Detail',
        mounted() {
            console.log(this.$route)
        },
        props: ['id', 'title']
    }
</script>

<style>

</style>