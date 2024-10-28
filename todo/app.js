globalThis.DOM = {}
const DOM = globalThis.DOM

document.addEventListener('DOMContentLoaded', () => {
    DOM.todoList = document.getElementById('todo-list')
    DOM.addBtn = document.getElementById('add-btn')
    DOM.todoInput = document.getElementById('todo-input')

    DOM.addBtn.addEventListener('click', (event) => {

    })

    DOM.todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {

        }
    })
})
