import Vue from 'vue'
import Vuex from 'vuex'
import { IncomingMessage } from 'http';

Vue.use(Vuex)

const maxTicker = 10
const maxDepth = 100

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
    data: {
      ticker: [],
      depth: {}
    }    
  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      console.log(event)
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      console.log(event)
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.log(event)
      console.error(state, event)
    },
    SOCKET_ONMESSAGE (state, message) {
      //console.log(message)      
      state.message = message
      //console.log(message[0].e)
      if (message[0].e.indexOf('ticker') !== -1) {
        if (state.data.ticker.length < maxTicker) {
          state.data.ticker.push(message[0])
        } else {
          state.data.ticker.shift()
          state.data.ticker.push(message[0])
        }
        console.log('ticker 数据')
        console.log(state.data.ticker)
      } else if (message[0].e.indexOf('depth') !== -1) {
        state.data.depth = message[0]      
        console.log('depth 数据')
        console.log(state.data.depth)
      } else if (message[0].e.indexOf('trade') !== -1) {
        state.data.trade = message[0]
        console.log('trade 数据')
        console.log(state.data.trade)
      } else if (message[0].e.indexOf('ohlc') !== -1) {
        state.data.ohlc =  message[0]
        console.log('ohlc 数据')
        console.log(state.data.ohlc)
      }
      
    },
    WS_RECONNECT (state, count) {
      console.log(state)
      console.info(state, count)
    },
    WS_RECONNECT_ERROR (state) {
      console.log(state)
      state.socket.reconnectError = true
    }
  },
  actions: {

  }
})
