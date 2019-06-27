<template>
    <div>
        <transition name="authForm">
            <h5 class="b-6 mb-5" v-if="isLogin">LOGIN TO YOUR ACCOUNT</h5>
            <h5 class="b-6 mb-5" v-else>CREATE NEW ACCOUNT</h5>
        </transition>
        <form @submit.prevent="[isLogin ? login() : register()]">
            <transition name="authForm">
                <div class="form-group" v-show="!isLogin">
                    <input type="text" class="form-control br-0 t-14" :class="[errors.name ? 'is-invalid' : '']" v-model="form.name" placeholder="Your name" autocomplete="nope">
                    <span v-if="errors.name" class="invalid-feedback">{{ errors.name[0] }}</span>
                </div>
            </transition>
            <div class="form-group">
                <input type="email" class="form-control br-0 t-14" :class="[errors.email ? 'is-invalid' : '']" v-model="form.email" placeholder="Your Email" autocomplete="nope">
                <span v-if="errors.email" class="invalid-feedback">{{ errors.email[0] }}</span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control br-0 t-14" :class="[errors.password ? 'is-invalid' : '']" v-model="form.password" placeholder="Your Password" autocomplete="nope">
                <span v-if="errors.password" class="invalid-feedback">{{ errors.password[0] }}</span>
            </div>
            <div class="form-group">
                <input type="submit" :value="isLogin ? 'Login' : 'Register'" class="btn btn-large btn-success btn-block text-center br-0">
            </div>
            <hr>
            <div class="text-center">
                <p><strong>OR</strong></p>
                <p><span class="text-gray-500 nav-link"  @click="changeAuth">Don't have an account?</span></p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        isLogin: {
            required: true,
            type: Boolean
        }
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        changeAuth() {
            this.isLogin = !this.isLogin
            this.$store.dispatch('validation/clearErrors');
        },
        async login() {
            try {
                await this.$auth.login({data: this.form})
                this.toast('success', 'check', 'Welcome back')
                
                this.$router.push('/todo')
            } catch (error) {
                
            }
        },
        async register(){
            try {
                await this.$axios.post('register', this.form)
                this.toast('success', 'check', 'Registration successful') //Global toaster mixin

                await this.$auth.login({data: this.form})
                
                // this.form.name = ''
                // this.form.email = ''
                // this.form.password = ''
                this.$router.push('/todo')
            } catch (error) {
                
            }
        },
    },
}
</script>

<style scoped>
input{
    transition: all .3s ease
}
input:focus{
    box-shadow: none !important;
    outline: 0;
    border-color: #42b883 !important
}
.nav-link:hover{
    color: #42b883;
    cursor: pointer;
}
.authForm-enter-active {
  transition: all .4s ease;
}
.authForm-leave-active {
  transition: all .1s ease;
  /* transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
}
.authForm-enter, .authForm-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
