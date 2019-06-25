<template>
    <div>
        <h1>{{ errors }}Dashboard</h1>
        <button @click="test">click me</button>
    </div>
</template>

<script>
// import retrieveWeek from '~/plugins/helpers/retrieveWeek'
export default {
   
    // async asyncData({store}) {
    //     let filter = await store.state['todos/filter']
    //     return {
    //         filter: filter
    //     }
    // },
    created() {
        
    },
    methods: {
        test() {
            this.$store.dispatch('test')
        }
    }
}
</script>

<style>

</style>
