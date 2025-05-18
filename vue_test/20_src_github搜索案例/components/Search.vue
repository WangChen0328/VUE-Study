<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchByKeyword">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Search',
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchByKeyword() {
                this.$bus.$emit('loading')
                axios.get('https://api.github.com/search/users?q=' + this.keyWord).then(
                    response => {
                        this.$bus.$emit('getData', response.data.items)
                    },
                    error => {
                        this.$bus.$emit('error', error.message)
                    }
                )
            }
        }
    }
</script>

<style>

</style>