import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
export default {
    todos(state) {
        return state.todos
    },
    allTodos(state) {
        return state.todos.length
    },
    getCompletedTodos(state, getters) {
        return getters.filteredTodos.filter(todo => todo.completed).length
    },
    filteredTodos(state, getters) {
        
        switch (state.filter) {
            case 'all':
                return state.todos;
                break;
            case 'today':
                return getters.todayTodos;
                break;
            case 'week':
                return getters.weekTodos
                break;
        }
    },
    todayTodos(state) { 
        let todos = state.todos.filter(todo => {
            let convert = dayjs(todo.date).toDate();
            if(dayjs(convert).isSame(dayjs(), 'day')){
                return todo;
            }
        })

        return todos;
    },
    weekTodos(state) {
        let weekdates = retrieveWeek();
        
        let todos = state.todos.filter(todo => {
            let convert = dayjs(todo.date).toDate();
            if(dayjs(convert).isBetween(subtractDay(weekdates[0]), addDay(weekdates[6]), 'day')) {
                return todo;
            }
        })
        return todos;
    }
    
}

function retrieveWeek() {
    let fromDate = new Date();
    fromDate.setHours(0, 0, 0)
    var sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()))
    var result = [new Date(sunday)];
    while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
        result.push(new Date(sunday));
    }
    return result;
}

function addDay(date){
    return dayjs(date).add(1, 'day').toDate();
}

function subtractDay(date){
    return dayjs(date).subtract(1, 'day').toDate();
}