<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style>
.margin-navbar{
  margin-top: 70px !important;
}
</style>
