<template>
  <div class="card-todo">
    <h5>{{ todo.title }}</h5>
    <p>Done: {{ todo.done ? "Yes" : "Not yet" }}</p>
    <a href="#" @click.prevent="$emit('remove', todo.id)"> Remove </a>
    <br />
    <a href="#" @click.prevent="todo.toggle()"> Toggle done </a>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,     
    },
  },
  emits: ["remove"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  text-align: center;
}
.card-todo {
  background:  yellow !important; color: #111;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  border: 1px solid black;
  width: 300px;
}
</style>
