<template>
  <todo-list />
</template>

<script>
import TodoList from './components/todo-list.vue'

export default {
  name: 'App',
  components: {
    TodoList
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  /* flex-direction: column; */
  align-content: center;
  justify-content: center;
}
</style>
