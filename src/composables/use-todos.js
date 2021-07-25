import { ref } from 'vue';
const todos = ref(
  [
    {
      id: 1,
      title: 'Initial todo 1',
      done: false,
    },
    {
      id: 2,
      title: 'Initial todo 2',
      done: false,
    }
  ]
);

const useTodos = () => {
  const addTodo = (todoTitle) => {
    const todo = {
      id: todos.value.length + 1,
      title: todoTitle,
      done: false,
    }
    todo.id = todos.value.length + 1;
    todos.value.push(todo);
  }

  const removeTodo = (todoId) => {
    const deleteIndex = todos.value.findIndex(todo => todo.id == todoId);
    todos.value.splice(deleteIndex, 1);
  }

  const toggleTodo = (todoId) => {
    const targetTodo = todos.value.find(todo => todo.id == todoId);
    targetTodo.done = !targetTodo.done;
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }
}
export default useTodos;
