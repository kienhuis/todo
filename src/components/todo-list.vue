<template>
  <button @click="addTodoText('Random todo text')">Add random todo TEXT</button>

  <button @click="addTodoImage('Random todo image')">
    Add random todo IMAGE
  </button>

  <h3>Hello</h3>
  <h4>You have {{ todos.length }} things to do</h4>
  <!-- 
  <component
   :is="factory(attribute.type)"
   v-for="(attribute, index) in attributesSettings.attributes"
   :key="index"
   :title="attribute.name"
   :attribute="attribute"
   @attr-change="onAttrChange"
  /> -->

  <!-- <div v-for="todo in todos" :key="todo.id">
    <component :is="Foo" :todo="todo" />
  </div> -->

  <div v-for="todo in todos" :key="todo.id">
    <bla v-if:="todo instanceof TodoText" :todo="todo" class="card-todo" @remove="removeTodo(todo.id)"/>
    <foo v-if:="todo instanceof TodoImage" :todo="todo" class="card-todo" @remove="removeTodo(todo.id)"/> 
    <!-- <component :is="bla" :todo="todo" class="card-todo" @remove="removeTodo(todo.id)"/> -->
  </div>
</template>

<script>

import Store from "@/store/todos.js";
import TodoText from "@/store/todo_text.js";
import TodoImage from "@/store/todo_image.js";

export default {
  name: "TodoList",
 
  setup() {
 
    window.Store = Store; // for testing from chrome
    return {
      TodoText,
      TodoImage,
      todos: Store.todos,
      addTodoText: Store.addTodoText,
      addTodoImage: Store.addTodoImage,
      removeTodo: Store.removeTodo,
    };
  },
};
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
