<template>
    <div>
        <h1>当前求和为: {{ sum }}</h1>
        <h1>当前求和放大10倍为: {{ bigSum }}</h1>
        <h1>我在{{ school }}，学习{{ subject }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div> 
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Count',
        data() {
            return {
                n: 1
            }
        },
        methods: {
            increment() {
                this.$store.commit('ADD', this.n)
            },
            decrement() {
                this.$store.commit('MINUS', this.n)
            },
            incrementOdd() {
                this.$store.dispatch('addOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('addWait', this.n)
            }
        },
        computed: {
            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            //...mapState({sum: 'sum', school: 'school', subject: 'subject'})
            
            //借助mapState生成计算属性，从state中读取数据。（数组写法）
            ...mapState(['sum', 'school', 'subject']),
            //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters(['bigSum'])
        }
    }
</script>