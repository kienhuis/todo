import { v4 as uuidv4 } from 'uuid';

export default class Todo {
  constructor(title, id = null){
    this.id = id || uuidv4(); // it will generate random id for todo
    this.title = title
    this.done = false
  }

  toggle(){
    this.done = !this.done
  }

  toJson(){
    return {
      id: this.id,
      title: this.title,
      done: this.done
    }
  }
}
