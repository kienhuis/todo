import { reactive } from 'vue'
import TodoText from './todo_text.js'
import TodoImage from './todo_image.js'


class Todos {
  constructor() {
    this.todos = []
  }

  addTodoText(title = "Initial Text Todo") {
    this.todos.push(new TodoText(title))
  }

  addTodoImage(title = "Initial Image Todo") {
    this.todos.push(new TodoImage(title))
  }

  removeTodo(todoId) {
    const deleteIndex = this.todos.findIndex(todo => todo.id == todoId);
    this.todos.splice(deleteIndex, 1);
  }

  toJson() {
    return {
      todos: this.todos.map(todo => todo.toJson())
    }
  }
}

export default reactive(new Todos())
