<template>    
    <div class="box">
        <h1 style="text-align: center; font-size: 2em; padding-bottom: 20px">Liste</h1>
      <ul>
        <li v-for="line of list" :key="line">
          <a>{{line.first_name}} {{line.last_name}} {{line.position}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {  
    computed: {
        ...mapState({
        list: state => state.list
        })
    }
    }
</script>