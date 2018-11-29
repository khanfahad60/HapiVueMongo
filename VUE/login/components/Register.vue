<template>
    <div class="box">
      <h1 style="text-align: center; font-size: 2em; padding-bottom: 20px">Register</h1>
      <form @submit.prevent="add">
          <input v-model="user" type="text"/>
      </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            user: 'some new user'
        }        
    },
    methods: {
        ...mapActions([
            'add'
        ])
    },
}
</script>

