<template>
    <div>
        <div v-if="todos.length < 1" class="alert alert-info br-0 shadow">
            <strong>No Todo</strong>
        </div>
        <transition-group  v-else  name="todo-item" :duration="{ enter:300, leave: 400}" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <div v-for="(todo) in todos" :key="todo.id" class="d-flex flex-row justify-content-between p-lg-3 p-2 bg-light shadow-sm mb-2 todo-item"  @click="toggle(todo, $event)">
                <div class="todo-left d-flex flex-row ">
                    <label class="checkWrapper">
                        <input type="checkbox" disabled :checked="todo.completed">
                        <span class="checkmark"></span>
                    </label>
                    <div>
                        <h6 :class="[todo.completed ? 'todo-completed' : '']">{{ todo.title }}</h6>
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
@media(max-width: 500px) {
    .font-italic{
        font-size: 70%
    }
    h6{
        font-size: 0.8em
    }
    .fa-trash{
        font-size: 13px
    }
    .chechmark{
        width: 14px;
        height: 14px;
    }
    .checkWrapper .checkmark:after{
        left: 3px;
        top: 0px;
        width: 5px;
        height: 9px;
        transition: 0.7s ease all
    }
}
/* Start of checkbox */
</style>
