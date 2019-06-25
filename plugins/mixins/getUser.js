import Vue from 'vue'

import { mapGetters } from 'vuex'

const Validate = {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    profile: 'auth/user',
                    authenticated: 'auth/authenticated',
                }),
            }
        })
    }
}

Vue.use(Validate)