<template>
  <div id="app-comments">
    <ul>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </ul>
  </div>
</template>

<script>
import Comment from './Comment.vue'

export default {
  name: 'app-comments',
  components: {
    Comment
  },
}
</script>

<style>
#app-comments {
  background: #eee;
  width: 800px;
  height: 150px;

  margin: 0;
  padding: 0;

  z-index: 999999999;

  border: 2px solid black;

  overflow-y: scroll;
}

#app-comments ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app-comments p {
  margin: 15pt;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 15pt;
}
</style>
