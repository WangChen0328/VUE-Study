<template>
  <div>
    <School></School>  
    <Studnet></Studnet>  
  </div>
</template>

<script>
    //引入组件
    import School from './School.vue';
    import Studnet from './Student.vue';

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

