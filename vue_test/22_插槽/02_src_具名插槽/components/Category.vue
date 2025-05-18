<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽 -->
        <slot name="center">是我默认值当没有传递结构时显示1</slot>
        <slot name="footer">是我默认值当没有传递结构时显示2</slot>
    </div> 
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Category',
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