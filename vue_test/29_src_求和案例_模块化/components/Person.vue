<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addUser">添加赵六</button>
    <ul>
        <li v-for="(person, index) in persons" :key="index">{{ person.name }}</li>
    </ul>

    <h1 style="color: red;">上方求和为: {{ sum }}</h1>
  </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {
                const user = {id: nanoid(), name: this.name}
                this.$store.commit('personAbout/ADD_PERSON', user)
                this.name = '';
            },
            addUser() {
                this.$store.dispatch('personAbout/addPersonByServe')
            }
        },
        computed: {
            persons() {
                return this.$store.state.personAbout.persons
            },
            sum() {
                return this.$store.state.countAbout.sum
            }
        }
    }
</script>

<style>

</style>