import Todo from './todo.js';

export default class TodoImage extends Todo {
  constructor(title, id = null, image = '') {
    super(title, id)
    this.image = image
  }

  getType() {
    return "TodoImageComponent"
  }
  toJson() {
    const t = super.toJson()
    return {
      ...t,
      image: this.image
    }
  }
}
