# vuex-examples

## Step1

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


## Step2

修改 store.js

``` js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 6
  },
  getters: {
    count(state) {
      return state.count
    }
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
```

## Step3

修改 store.js, 添加修改状态函数

``` js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 6
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({commit, state}) {
      commit('increment')
    }
  }
})

```

修改 home.vue


``` js
<template>
  <div class="home">
    <button @click="increment">增加</button>
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
  },
  methods: {
    ...mapActions(['increment'])
  }

}
</script>

```