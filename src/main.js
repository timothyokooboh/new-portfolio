import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const myPlugin = {
  install(Vue, options) {
    Vue.mixin({
      created() {
        const { greeting } = options;
        console.log(greeting)
      }
    }),

    Vue.prototype.$validateEmail = email => /.+@.+\..+/.test(email);
  }
}

Vue.use(myPlugin, {greeting: "good morning sir"})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
