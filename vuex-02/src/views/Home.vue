<template>
  <div class="home">
    <button @click="call">增加</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      wsData: ''
    }
  },
  methods: {
    call: function () {      
      this.$socket.send("{\"method\":\"sub\", \"channel\": \"private.trans.7bcfecc7a989783ee6e01b67f7e1a8f0/market.btc_usdt.ticker/market.btc_usdt.trade/market.btc_usdt.depth/market.btc_usdt.ohlc@1800\"}")
      this.$options.sockets.onmessage = (d) => {
        if (this.wsData !== d.data) {
          console.log(d.data)
        }
        this.wsData = d.data
      }
    }
  }
}
</script>
