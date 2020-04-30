<template>
  <div class="body">
    <p>Logging in...</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Auth',
  methods: mapActions(['handleAuthentication']),
  // mounted() {
  //   this.handleAuthentication().then(() => {
  //     this.$router.push({name: 'home'});
  // });
  // }
}
</script>

<style scoped>
  @import "../assets/css/mainpage.css";
</style>