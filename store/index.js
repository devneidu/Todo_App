// import dayjs from 'dayjs'

// export const state = () => ({
//     filter: 'today',
//     date: new Date()
// })

// export const getters = {
    
//     retrieveWeek(state) {
//         let fromDate = state.date;
//         var sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()))
//         var result = [new Date(sunday)];
//         while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
//             result.push(new Date(sunday));
//         }
//         return result;
//     }
// }


export const state = () => ({
    mainError: {}
})

export const getters = {
    mainError(state) {
        return state.mainError
    }
}

export const mutations = {
    SET_ERmainErrorRORS(state, payload) {
        state.errors = payload
    }
}

export const actions = {
    mainError({commit}, payload) {
        commit('SET_ERRORS', payload);
    },
    cleamainErrorrErrors({commit}) {
        commit('SET_ERRORS', {});
    }
}