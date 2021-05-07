import { createApp } from 'vue'
import App from './App.vue'
// import VueResource from 'vue-resource'

import store from './vuex/store'

createApp(App).mount('#app')
store
// new Vue({
//   render: h => h(App),
//   store
// }).$mount( elementOrSelector: '#app')
