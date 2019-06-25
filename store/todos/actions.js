import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export default {
    async fetchTodos({commit}) {
        let {data} =  await this.$axios.get('todos');
        
        commit('POPULATE_TODOS', data.data)
    },
    async toggle({dispatch, rootGetters}, data) {
        let newData = {
            title: data.title,
            completed: data.completed ? 0 : 1,
            id: data.id
        }
        
        await dispatch('editTodo', newData)
    },
    async editTodo({commit}, data) {
        await this.$axios.put('todos/' + data.id, data)
        commit('EDIT_TODO', data);
    },
    async deleteTodo({commit}, payload) {
        await this.$axios.delete('todos/' + payload)
        commit('DELETE_TODO', payload)
    },
    changeFilter({commit}, value){
        commit('CHANGE_FILTER', value)
    }
}