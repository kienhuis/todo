<template>
  <button @click="addTodo('Random todo')">
    Add random todo
  </button>

  <h3>Hello</h3>
  <h4>You have {{ todos.length }} things to do</h4>
  <todo
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    class="card-todo"
    @remove="removeTodo(todo.id)"
  />
</template>

<script>
import Todo from '@/components/todo.vue';
import Store from '@/store/todos.js'

export default {
  name: 'TodoList',
  components: { Todo },
  setup() {
    window.Store = Store // for testing from chrome
    return {
      todos: Store.todos,
      addTodo: Store.addTodo,
      removeTodo: Store.removeTodo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-todo {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  border: 1px solid black;
  max-width: 300px;
}
</style>
