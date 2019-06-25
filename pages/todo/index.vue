<template>
    <div class=" container-flid">
        <div class="row m-0">
            <div class="col-lg-6 mx-lg-auto" id="col">
                <div class="app-wrapper">
                    <div class="upper">
                        <div class="flex">
                            <div>
                                <h1 class="b-7 mb-">TODO LIST</h1>
                            <p class="text-gray-500">March 12, Wednessday</p>
                            </div>
                            <div class="profile shadow-sm">CN</div>
                        </div>
                    </div>
                    <div v-if="!isAdd" class="lower">
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
                        <hr>
                        <transition-group name="todo-item" :duration="{ enter:300, leave: 400}" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                            <div v-for="(todo) in todos" :key="todo.id" class="d-flex flex-row justify-content-between p-3 bg-light shadow-sm mb-2 todo-item"  @click="toggle(todo)">
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
                    <div v-else class="lower">
                        <div class="btn btn-light br-0 btn-sm mb-4 backBtn" @click="isAdd = !isAdd">
                            <font-awesome-icon :icon="['fas', 'chevron-left']" class="t-12"></font-awesome-icon> back
                        </div>
                        <todo-form></todo-form>
                    </div>
                    <div class="add-btn" v-show="!isAdd" @click="isAdd = !isAdd">
                        <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TodoForm from '~/components/TodoForm'
import {mapState, mapGetters, mapActions } from 'vuex'
export default {
    components:{
        TodoForm
    },
    computed: {
        ...mapGetters('todos', {
            todos: 'filteredTodos',
            allTodos: 'allTodos',
            getCompletedTodos: 'getCompletedTodos',
            todayTodos: 'todayTodos',
            weekTodos: 'weekTodos'
        }),     
        ...mapState('todos', {
            filter: 'filter'
        })
    },
    data() {
        return {
            isAdd: false,
            
        }
    },
    async fetch({store, $axios}) {
        try {
            
            await store.dispatch('todos/fetchTodos')
        } catch (error) {
            
        }
    },
    methods: {
        ...mapActions({
            toggle: 'todos/toggleTodo',
            deleteTodo: 'todos/deleteTodo',
            changeFilter: 'todos/changeFilter'
        }),
    },
    created() {
        
    }
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
.btn:focus{
    box-shadow: none;
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
.backBtn{
    cursor: pointer;
}
.app-wrapper{
    min-height: 90vh;
    background: white;
    box-shadow: 0px 0px 12px -5px rgb(126, 124, 124);
}
.lower{
    padding: 40px 40px 10px 40px;
}
.upper{
    background: #fafafa;
    padding: 40px 40px 10px 40px;
    color: #312f2f;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
.flex{
    display: flex;
    display: -ms-flexbox;
    flex-direction: row;
    justify-content: space-between
}
.profile{
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    color: #4770FF;
    text-align: center
}
.add-btn{
    background: #4770FF;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 20px;
    border-radius: 50%;
    box-shadow: 0px 0px 20px -3px rgb(83, 82, 82);
    position: fixed;
    bottom: 30px;
    right: 7%;
    cursor: pointer;
}
.todo-completed{
    text-decoration: line-through;
    color: #9ca0a6;
    font-weight: 400 !important;
    transition: 0.4s all ease-in
}

/* Start of checkbox */

.checkWrapper {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .checkWrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 17px;
    width: 17px;
    background-color: #eee;
    border:  1px solid #28a745
  }
  
  /* On mouse-over, add a grey background color */
  .checkWrapper:hover input ~ .checkmark {
    background-color: #ccc;
    border:  1px solid #ccc
  }
  
  /* When the checkbox is checked, add a blue background */
  .checkWrapper input:checked ~ .checkmark {
    background-color: #28a745;
    border:  1px solid #28a745;
    transition: 0.4s ease cubic-bezier(0.075, 0.82, 0.165, 1)
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .checkWrapper input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .checkWrapper .checkmark:after {
    left: 4px;
    top: 0px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }


  /* End of checkbox */
@media(max-width: 992px) {
    #col{
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
    .app-wrapper{
        height: 100vh;
    }
    .add-btn{
        right: 50%;
    }
}
@media(max-width: 600px) {
    .upper h1{
        font-size: 2em
    }
    .upper h4{
        font-size: 1.2em
    }
}
@media(max-width: 500px) {
    .upper h1{
        font-size: 1.7em
    }
    .upper h4{
        font-size: 1em
    }
    .profile{
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 17px
    }
}
@media(max-width: 400px) {
    .upper h1{
        font-size: 1.5em
    }
    .upper h4{
        font-size: 1em
    }
}
</style>
