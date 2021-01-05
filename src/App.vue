<template>
  <v-main-wrapper msg="Welcome to Your Vue.js App"/>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  height: 100%;

}
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  background: black;


}
a{
  text-decoration: none;
  font-family:Helvetica

}
/* unvisited link */
a:link {
  color: white;
}

/* visited link */
a:visited {
  color: wheat;
}

/* mouse over link */
a:hover {
  color: snow;
}

/* selected link */
a:active {
  color: salmon;
}
</style>
