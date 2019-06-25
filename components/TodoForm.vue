<template>
    <div>
        <form @submit.prevent="addTodo">
            <div class="form-group">
                <label for="" class="t-13 text-gray-500">Todo Tile</label>
                <input type="text" class="form-control br-0 t-14" :class="[errors.title ? 'is-invalid' : '']"  placeholder="Title" v-model="form.title">
                <span v-if="errors.title" class="invalid-feedback">{{ errors.title[0] }}</span>
            </div>
            <div class="form-group">
                <label for="" class="t-13 text-gray-500">Todo Date</label>
                <input type="date" class="form-control br-0 t-14"  placeholder="Date" :class="[errors.date ? 'is-invalid' : '']"  v-model="form.date">
                <span v-if="errors.date" class="invalid-feedback">{{ errors.date[0] }}</span>
            </div>
            <div class="form-group">
                <label for="" class="t-13 text-gray-500">Todo Time</label>
                <input type="time" class="form-control br-0 t-14"  placeholder="Time" :class="[errors.time ? 'is-invalid' : '']"  v-model="form.time">
                <span v-if="errors.time" class="invalid-feedback">{{ errors.time[0] }}</span>
            </div>
            <div class="form-group pt-5">
                <input type="submit" class="btn btn-block btn-dark br-0 mt-2 btn-lg"  value="Add">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '',
                date: '',
                time: ''
            },
            
        }
    },
    methods: {
        async addTodo() {
            try {
                await this.$store.dispatch('todos/addTodo', {
                    title: this.form.title,
                    time: this.form.time,
                    date: this.form.date,
                })
                this.isAdd = false
                this.$parent.$emit('isAdd')
                this.toast('success', 'check', 'New todo added')
            } catch (errors) {
                
            }
        }
    }
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
</style>
