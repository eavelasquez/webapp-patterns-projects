import { TodoItem, TodoList } from './classes.js'

const todoList = TodoList.getInstance()

export const LocalStorage = {
  load() {
    const list = localStorage.getItem('todos')
    if (!list) return

    for (const t of JSON.parse(list)) {
      todoList.add(new TodoItem(t.text))
    }
  },
  save() {
    const array = Array.from(todoList.items)
    localStorage.setItem('todos', JSON.stringify(array))
  }
}

todoList.addObserver(LocalStorage.save)
