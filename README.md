# vuex-examples



修改 store.js

``` js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 6
  },
  mutations: {

  },
  actions: {

  }
})

```

修改 home.vue

``` js
<template>
  <div class="home">
    <h1>{{count}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }

}
</script>

```