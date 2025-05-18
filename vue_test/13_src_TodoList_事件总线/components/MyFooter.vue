<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{ complete }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="deleteCompeleted">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: 'MyFooter',
        methods: {
          deleteCompeleted() {
            this.$emit('deleteCompeletedToto')
          }
        },
        computed: {
          total() {
            return this.todoList.length
          },
          complete() {
            return this.todoList.reduce((pre, todo) => pre + (todo.completed ? 1: 0), 0)
          },
          isAll: {
            get() {
              return this.complete === this.total && this.total > 0
            },
            set(checked) {
              this.$emit('checkAllTotos', checked)
            }
          }
        },
        props: ['todoList']
    }
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>