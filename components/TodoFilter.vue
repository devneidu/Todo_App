<template>
<div class="">
    <button type="button" class="btn btn-sm br-0" :class="[filter == 'today' ? 'btn-info' : 'btn-outline-dark']" @click="changeFilter('today')">
        Today <span class="badge badge-light">{{ todayTodos.length }}</span>
    </button>
    <button type="button" class="btn btn-sm br-0" :class="[filter == 'week' ? 'btn-info' : 'btn-outline-dark']" @click="changeFilter('week')">
        Week <span class="badge badge-light">{{ weekTodos.length }}</span>
    </button>
    <button type="button" class="btn btn-sm br-0" :class="[filter == 'all' ? 'btn-info' : 'btn-outline-dark']" @click="changeFilter('all')">
        All <span class="badge badge-light">{{ allTodos }}</span>
    </button>
    <span class="btn float-right b-7">{{getCompletedTodos}}/{{todos.length}}</span>
</div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters('todos', {
            allTodos: 'allTodos',
            getCompletedTodos: 'getCompletedTodos',
            todayTodos: 'todayTodos',
            weekTodos: 'weekTodos'
        }),     
        ...mapState('todos', {
            filter: 'filter'
        })
    },
    methods: {
        ...mapActions({
            changeFilter: 'todos/changeFilter'
        }),
    },
}
</script>

<style scoped>

.btn:focus{
    box-shadow: none;
}
.flex{
    display: flex;
    display: -ms-flexbox;
    flex-direction: row;
    justify-content: space-between
}


@media(max-width: 500px) {
    .btn{
        font-size: 70% !important
    }
}

</style>
