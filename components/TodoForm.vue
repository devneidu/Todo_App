<template>
    <div>
        <form>
            <div class="form-group">
                <label for="" class="t-13 text-gray-500">Todo Tile</label>
                <input type="text" class="form-control br-0 t-14"  placeholder="Title">
            </div>
            <div class="form-group">
                <label for="" class="t-13 text-gray-500">Todo Date</label>
                <input type="text" class="form-control br-0 t-14"  placeholder="Date">
            </div>
            <div class="form-group">
                <label for="" class="t-13 text-gray-500">Todo Time</label>
                <input type="text" class="form-control br-0 t-14"  placeholder="Time">
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-block btn-dark br-0"  value="Add">
            </div>
        </form>
    </div>
</template>

<script>
export default {

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
