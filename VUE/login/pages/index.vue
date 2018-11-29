<template>
  <div class="container">
    <Login></Login>
  </div>
</template>

<script>
import axios from 'axios'

import Navigation from '~/components/Navigation'
import Home from '~/components/Home'
import Login from '~/components/Login'
import Register from '~/components/Register'

export default {  
  components: {
    Navigation,
    Home,
    Login,
    Register
  }, 
  async fetch ({store}) {
      const res = await axios('http://localhost:4000/')
      store.commit('initial', res.data)
  },
}
</script>

<style>
  .block {
    width: 50%;
    display: inline-block
  }
</style>

