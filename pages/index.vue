<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6 left-side">
            <div class="container">
                <div class="d-flex flex-row justify-content-between pt-4">
                    <div class="light-green"><img src="/logo.png" alt="logo" height="30" width="30"> <strong>TodoApp</strong></div>
                    <div class="">
                        <span class="nav-link text-gray-500 t-14 p-0" @click="changeAuth">{{ isLogin ? 'Register' : 'Login' }}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="row">
                        <div class="col-lg-7 mx-auto">
                            <p class="t-13 text-gray-600 b-5">START ORGANIZING YOUR TODOS</p>
                            <auth-form :isLogin="isLogin"></auth-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 right-side">
            <div class="bottom">
                <div class="btm_logo">
                    <img src="https://pbs.twimg.com/profile_images/1135493656901750784/AkIs_7dw_400x400.png" height="60" width="60" class="rounded-circle shadow" alt="">
                </div>
                <div class="d-flex flex-column ml-3 align-items-center justify-content-center">
                    <h6 class="t-14 mb-0">Chiaju Chinedu</h6>
                    <h6><a href="https:twitter.com/ChineduChiaju" class="t-13 text-gray-500" target="_blank">@ChineduChiaju</a></h6>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {    
    middleware: 'guest',
    components: {
        AuthForm
    },
    layout: 'auth',
    head: {
        title: 'TodoApp'
    },
    data() {
        return {
            isLogin: true
        }
    },
    computed: {
        
    },
    methods: {
        changeAuth() {
            this.isLogin = !this.isLogin
            this.$store.dispatch('validation/clearErrors');
        }
    }
}
</script>

<style scoped>
.nav-link:hover{
    color: #42b883;
    cursor: pointer;
}
.bottom{
    position: absolute;
    bottom: 40px;
    left: 40px;
    display: flex;
    display: -ms-flexbox;
    flex-direction: row;
    justify-content: space-between
}
.right-side{
    width: 100%;
    height: 100vh;
    background: #eaeaea
}

@media(max-width: 768px) {
    .right-side{
        display: none
    }
}
</style>
