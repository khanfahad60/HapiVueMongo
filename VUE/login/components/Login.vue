<template>
    <div class="box">
      <div>
        <form @submit.prevent="login">
          <div>
            <label class="block" for="login">login</label>
            <input class="block" type="text" id="login" v-model="username" required/>
          </div>
          <div>
            <label class="block" for="password">password</label>
            <input class="block" type="password" id="password" v-model="password" required/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
</template>


<script>
export default {
  name : 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log(this.username, this.password)
      this.$store.dispatch('retrieveToken'), {
        username: this.username,
        password: this.password
      }
    }
  }
}
</script>
