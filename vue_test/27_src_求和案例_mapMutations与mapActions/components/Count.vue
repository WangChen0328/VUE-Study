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
        <button @click="ADD(n)">+</button>
        <button @click="MINUS(n)">-</button>
        <button @click="addOdd(n)">当前求和为奇数再加</button>
        <button @click="addWait(n)">等一等再加</button>
    </div> 
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Count',
        data() {
            return {
                n: 1
            }
        },
        methods: {
            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
            //...mapMutations({increment: 'ADD', decrement: 'MINUS'}),
            ...mapMutations(['ADD', 'MINUS']),

            ...mapActions(['addOdd', 'addWait'])
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