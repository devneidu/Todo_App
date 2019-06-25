<template>
  <div class="body">
    <nuxt />
  </div>
</template>

<style scoped>
.body{
  width: 100%;
  padding: 3% 0;
  height: 100vh;
  background: rgb(255, 255, 255)
  /* background-size: cover;
  background: url('/todoBg.png');
  background-position: 20% 14% */
}

@media(max-width: 992px) {
    
    .body{
        padding: 0 !important
    }
}
</style>