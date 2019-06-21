import Vue from 'vue'

import { mapGetters } from 'vuex'

const errors = {
    install(Vue, options){
        Vue.mixin({
            computed: {
                ...mapGetters({
                    errors: 'validation/errors'
                })
            }
        })
    }
}

Vue.use(errors)