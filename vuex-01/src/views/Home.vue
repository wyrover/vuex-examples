<template>
  <div class="home">
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  computed: {
    ...mapGetters(['count'])
  }

}
</script>
