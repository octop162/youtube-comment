import Vue from 'vue'
import App from './App.vue'

console.log("Starts.")

// Container Tag
let container_name = 'app_container'
let body = document.getElementsByTagName('body')[0]
body.insertAdjacentHTML('afterbegin', `<div id="${container_name}"></div>`)

// Mount Tag
new Vue({
  el: `#${container_name}`,
  render: h => h(App)
})
