
<template>
  <li id="app-comment">
    <span>{{time}}</span>
    <span>{{message}}</span>
  </li>
</template>

<script>
export default {
  name: 'app-comment',
  computed: {
    time: function() {
      return "10:10"
    },
    message: function() {
      return "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    }
  }
}
</script>

<style>
#app-comment {
  margin: 0;
  padding: 0;
  border-bottom: 2px solid black;
}

#app-comment:last-child {
  border-bottom: none;
}
</style>
