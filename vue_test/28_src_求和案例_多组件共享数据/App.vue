<template>
  <div>
    <Count/> 
    <hr/>
    <Person/> 
  </div>
</template>

<script>
  import Count from './components/Count';
  import Person from './components/Person';
  export default {
      name: 'App',
      components: {
        Count,
        Person
      }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>