import { observerMixin } from './mixin.js'

export class TodoItem {
  constructor(text) {
    this.text = text
  }

  equals(other) { // Value Object pattern
    return this.text === other.text
  }
}

export class TodoList {
  // Data
  #data = new Set()
  get items() {
    return this.#data
  }

  // Singleton pattern
  constructor() {
    if (TodoList.instance) {
      throw new Error('Use TodoList.getInstance() to access the list')
    }
  }
  static instance = null
  static { // static init block
    this.instance = new TodoList()
  }
  static getInstance() {
    return this.instance
  }

  // List behaviour
  add(item) {
    const array = Array.from(this.#data)
    const todoExists = array.filter((t) => t.equals(item)).length > 0
    if (todoExists) return
    this.notify()
    this.#data.add(item)
  }
  delete(todo_text) {
    const array = Array.from(this.#data)
    // TODO: Check for errors
    const todoToDelete = array.filter((t) => t.text === todo_text)[0]
    this.#data.delete(todoToDelete)
    this.notify()
  }
  find(todo_text) {
    const array = Array.from(this.#data)
    return array.find((t) => t.text === todo_text)
  }
  replaceList(list) {
    this.#data = list
    this.notify()
  }
}

// Applying the observer mixin to the TodoList class
Object.assign(TodoList.prototype, observerMixin)
