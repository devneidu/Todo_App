import Vue from 'vue'

import { mapGetters } from 'vuex'

const notify = {
    install(Vue, options) {
        Vue.mixin({
            methods: {
                toast(type, icon, message) {
                    this.$toast.show(message, {
                        type: type,
                        icon: {
                            name: icon,
                        }
                    })
                }
            }
        })
    }
}

Vue.use(notify)