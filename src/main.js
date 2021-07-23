import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/*const application = Vue.createApp({
  data(){
    return{
      author: 'Nick',
      sample: 'this is a sample text'
    }
  }
})
application.mount('#app')*/
new Vue({
  render: h => h(App),
}).$mount('#app')
