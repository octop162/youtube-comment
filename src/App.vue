<template>
  <div id="app">
    <Comments v-drag style="position: absolute;"/>
  </div>
</template>

<script>
import Comments from './Comments.vue'
import drag from '@branu-jp/v-drag'

export default {
  name: 'app',
  components: {
    Comments,
  },
  directives: {
    drag
  }
}
</script>