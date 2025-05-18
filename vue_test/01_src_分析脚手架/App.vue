<template>
  <div>
    <img src="./assets/logo.png">
    <School></School>  
    <Studnet></Studnet>  
  </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue';
    import Studnet from './components/Student.vue';

    export default {
        name: 'App',
        components: {
            School,
            Studnet
        }
    }
</script>

<style>

</style>

