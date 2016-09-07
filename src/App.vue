<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import auth from './auth.js'

export default {
  data () {
    return {
      loggedIn: auth.check()
    }
  },
  created () {
  }
}
</script>

<style lang="sass">
@import "src/assets/scss/style.scss"
</style>
