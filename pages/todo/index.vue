<template>
    <div class=" container-flid">
        <div class="row m-0">
            <div class="col-lg-6 mx-lg-auto" id="col">
                <div class="app-wrapper">
                    <div class="upper">
                        <div class="flex">
                            <div>
                                <h1 class="b-7 mb-">TODO LIST</h1>
                            <p class="text-white-50">{{ $dayjs().format('dddd, DD MMM YYYY').toString() }}</p>
                            <p>
                                <span class="bg-danger text-white p-1 logout" @click="logout">
                                <font-awesome-icon :icon="['fas', 'sign-out-alt']"></font-awesome-icon>
                                Logout
                                </span>
                            </p>
                            </div>
                            <div class="profile" v-show="!isAdd" @click="showForm">
                                <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isAdd" class="lower">
                        <todo-filter :todos="todos"></todo-filter>
                        <hr>
                        <todo-list :todos="todos"></todo-list>
                    </div>
                    <div v-else class="lower">
                        <div class="btn btn-light br-0 btn-sm mb-4 backBtn" @click="isAdd = !isAdd">
                            <font-awesome-icon :icon="['fas', 'chevron-left']" class="t-12"></font-awesome-icon> back
                        </div>
                        <todo-form></todo-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TodoForm from '~/components/TodoForm'
import TodoList from '~/components/TodoList'
import TodoFilter from '~/components/TodoFilter'
import {mapState, mapGetters, mapActions } from 'vuex'
export default {
    middleware: 'auth',
    components:{
        TodoForm,
        TodoList,
        TodoFilter,
    },
    computed: {
        ...mapGetters('todos', {
            todos: 'filteredTodos',
        }), 
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
        showForm(){
            this.isAdd = true
            this.$store.dispatch('validation/clearErrors')
        },
        logout(){
            this.$auth.logout()
        }
    },
    created() {
        this.$on('isAdd', () => {
            this.isAdd = !this.isAdd
        })
    }
}
</script>

<style scoped>
.logout{
    cursor: pointer;
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
    background: #4770FF;
    padding: 40px 40px 10px 40px;
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
.flex{
    display: flex;
    display: -ms-flexbox;
    flex-direction: row;
    justify-content: space-between
}

.profile{
    background: rgb(255, 255, 255);
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 54px;
    color: #4770FF;
    font-size: 20px;
    border-radius: 50%;
    box-shadow: 0px 0px 20px -3px rgb(83, 82, 82);
    cursor: pointer;
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
    /* .add-btn{
        right: 44%;
    } */
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
        font-size: 1.6em
    }
    .upper h4{
        font-size: 1em
    }
    .profile{
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 14px
    }
    .upper, .lower{
        padding-left: 15px;
        padding-right: 15px;
    }
}
@media(max-width: 400px) {
    .upper h1{
        font-size: 1.4em
    }
    .upper p{
        font-size: 85%
    }
    .upper h4{
        font-size: 1em
    }
}
</style>
