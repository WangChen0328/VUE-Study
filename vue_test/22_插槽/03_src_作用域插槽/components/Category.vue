<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :game="game" :msg="['你好','你好']">是我默认值当没有传递结构时显示</slot>
    </div> 
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Category',
        data(){
            return {
                game: ['红色警戒','穿越火线','劲舞团','超级玛丽'],
            }
        }, 
        props: ['title']
    }
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;  
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>