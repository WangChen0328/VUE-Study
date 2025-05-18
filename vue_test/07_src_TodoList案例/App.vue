<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>

                <MyList :todoList="todoList" 
                  :checkTodo="checkTodo" 
                  :deleteToto="deleteToto"/>

                <MyFooter :todoList="todoList" 
                  :checkAllTotos="checkAllTotos"
                  :deleteCompeletedToto="deleteCompeletedToto"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader';
    import MyList from './components/MyList';
    import MyFooter from './components/MyFooter';

    export default {
        name: 'App',
        data() {
            return {
                todoList: [
                  {id: '001', title: '吃饭', completed: true},
                  {id: '002', title: '睡觉', completed: false},
                  {id: '003', title: '打豆豆', completed: true}
                ]
            }
        },
        methods: {
          //添加一个todo
          addTodo(data) {
            this.todoList.unshift(data)
          },
          //勾选或取消一个todo
          checkTodo(id) {
            this.todoList.forEach((todo) => {
              if(todo.id === id) {
                todo.completed = !todo.completed
              }
            })
          },
          //删除一个todo
          deleteToto(id) {
            this.todoList = this.todoList.filter(todo => todo.id != id)
          },
          //全选或全不选
          checkAllTotos(completed) {
            this.todoList.forEach(todo => todo.completed = completed)
          },
          //删除所有完成todo
          deleteCompeletedToto() {
            this.todoList = this.todoList.filter(todo => !todo.completed)
          }
        },  
        components: {
            MyHeader,
            MyList,
            MyFooter
        }    
    }
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>