import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export default {
    async fetchTodos({commit}) {
        let {data} =  await this.$axios.get('todos');
        
        commit('POPULATE_TODOS', data.data)
    },
    async toggleTodo({dispatch, rootGetters}, data) {
        let newData = {
            title: data.title,
            completed: data.completed ? 0 : 1,
            id: data.id
        }
        // console.log(rootGetters['functions/retrieveWeek']);
        
        // console.log(this.$dayjs('2019-02-04').toString() + 'from toggle')
        // console.log(dayjs('2010-10-20').isBetween('2000-10-19', dayjs('2019-10-25'), 'year'))
        // // console.log(dayjs().isSame(dayjs('2019-01-07')))
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