<template>
    <div>
        <transition-group name="todo-item" :duration="{ enter:300, leave: 400}" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <div v-for="(todo) in todos" :key="todo.id" class="d-flex flex-row justify-content-between p-3 bg-light shadow-sm mb-2 todo-item"  @click="toggle(todo, $event)">
                <div class="todo-left d-flex flex-row ">
                    <label class="checkWrapper">
                        <input type="checkbox" disabled :checked="todo.completed">
                        <span class="checkmark"></span>
                    </label>
                    <div>
                        <h6 :class="[todo.completed ? 'todo-completed' : '']">{{ todo.title }}</h6>
                        <!-- <input type="text" :size="todo.title.length" :value="todo.title" class="b-5 bg-light pb-1" style="border: 0; width: 100%"> -->
                        <p class="mb-0 font-italic text-gray-500" :class="[todo.completed ? 'todo-completed' : '']">{{ todo.date }}</p>
                    </div>
                </div>
                <div class="todo-right">
                    <font-awesome-icon :icon="['fas', 'trash']" @click="deleteTodo(todo.id)" class="text-danger"></font-awesome-icon>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import {mapActions } from 'vuex'
export default {
    props: {
        todos: {
            required: true,
            type: Array
        },

    },
    methods: {
        ...mapActions({
            deleteTodo: 'todos/deleteTodo',
        }),
        toggle(todo, e) {
            if(!e.target.hasAttribute('fill')){
                this.$store.dispatch('todos/toggle', todo)
            }
        }
    },
}
</script>

<style scoped>
.todo-item-leave-active {
  transition: all .5s ease;
  /* transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
}
.todo-item-enter, .todo-item-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.fa-trash:hover{
    cursor: pointer;
}
.todo-item{
    transition: .4s ease all
}
.todo-item:hover{
    cursor: pointer;
    box-shadow: 0px 0px 7px rgb(126, 124, 124) !important;
}
.todo-completed{
    text-decoration: line-through;
    color: #9ca0a6;
    font-weight: 400 !important;
    transition: 0.4s all ease-in
}

/* Start of checkbox */
</style>
