<template>
  <div id="app">
    <h1>Frontend</h1>

    <router-view></router-view>
  </div>
</template>

<script>
import auth from './auth.js'

export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style lang="sass">
@import "src/assets/scss/style.scss"
</style>
