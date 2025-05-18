<template>
  <li>
        <label>
            <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)" ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name: 'MyItem',
        methods: {
          handleCheck(id) {
            pubsub.publish('checkTodo', id)
          },
          handleDelete(id) {
            pubsub.publish('deleteToto', id)
          },
          handleEdit(todo) {
            // eslint-disable-next-line no-prototype-builtins
            if(todo.hasOwnProperty('isEdit')) {
              todo.isEdit = true
            } else {
              this.$set(todo, 'isEdit', true)
            }
            //在本方法所有代码执行后，dom渲染后，执行$nextTick的回调方法
            this.$nextTick(function() {
              this.$refs.inputTitle.focus()
            })
          },
          //失去焦点回调，真正执行修改逻辑
          handleBlur(todo, event) {
            todo.isEdit = false
            pubsub.publish('updateToto', {
              id: todo.id, 
              value: event.target.value
            })
          }
        },
        props: ['todo']
    }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>