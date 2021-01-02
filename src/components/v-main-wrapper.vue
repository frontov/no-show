<template>
  <div class="main">
    <v-header></v-header>
    <div class="wrapper">
    <router-view>
    </router-view>
      <div class="push"></div>
    </div>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
import vHeader from "@/components/v-header"
import VFooter from "@/components/v-footer";
export default {
  name: 'main',
  props: {
    msg: String
  },
  components:{
    VFooter,
    vHeader
  }
}
</script>

<style>
.main{
  /*position: absolute;*/
  /*left: 0;*/
  /*right: 0;*/
  background: black;
  /*border: 0;*/
}
.wrapper {
  min-height: 80vh;

  /* Equal to height of footer */
  /* But also accounting for potential margin-bottom of last child */
  margin-bottom: -50px;
}
.footer,
.push {
  height: 50px;
}


</style>
