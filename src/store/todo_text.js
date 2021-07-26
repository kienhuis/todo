import Todo from './todo.js';

export default class TodoText extends Todo {
  constructor(title, id = null, text = '') {
    super(title, id)
    this.text = text
  }
  getType() {
    return "TodoTextComponent"
  }
  toJson() {
    const t = super.toJson()
    return {
      ...t,
      text: this.text
    }
  }
}
