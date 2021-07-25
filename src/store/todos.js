import {reactive, watch} from 'vue'
import Todo from './todo'


class Todos {
  constructor(){
    this.todos = []
  }

  addTodo(title="Initial Todo"){
    this.todos.push(new Todo(title))
  }

  removeTodo(todoId){
    const deleteIndex = this.todos.findIndex(todo => todo.id == todoId);
    this.todos.splice(deleteIndex, 1);
  }

  toJson(){
    return {
      todos: this.todos.map(todo=>todo.toJson())
    }
  }
}

export default reactive(new Todos())
