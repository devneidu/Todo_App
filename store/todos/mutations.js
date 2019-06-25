export default {
    POPULATE_TODOS(state, payload) {
        state.todos = payload
    },
    EDIT_TODO(state, payload) {
        let index = state.todos.findIndex(todo => todo.id == payload.id)
        state.todos[index].completed = payload.completed
        state.todos[index].title = payload.title
    },
    DELETE_TODO(state, id) {
        let index = state.todos.findIndex(todo => todo.id == id)
        state.todos.splice(index, 1);
    },
    CHANGE_FILTER(state, value){
        state.filter = value
    },
    ADD_TODO(state, todo){
        state.todos.push(todo)
    }
}