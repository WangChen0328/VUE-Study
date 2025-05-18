<template>
    <div id="root">
      <button @click="getStudent">获取学生信息</button>
      <button @click="getSchool">获取汽车信息</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'App',
        methods: {
          //跨域验证，协议名，主机名，端口号
          getStudent() {
            axios.get('http://localhost:8080/atguigu/students').then(
              response => {
                console.log('请求成功了', response.data)
              },
              error => {
                console.log('请求了失败了', error.message)
              }
            )
          },
          getSchool() {
            axios.get('http://localhost:8080/demo/cars').then(
              response => {
                console.log('请求成功了', response.data)
              },
              error => {
                console.log('请求了失败了', error.message)
              }
            )
          }
        }  
    }
</script>