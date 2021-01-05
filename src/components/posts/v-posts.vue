<template>
<div class="v-posts">
  <v-post
  v-for="post in posts"
  :key="post.id"
  :img="post.img"
  :text="post.text"></v-post>
</div>
</template>

<script>
import vPost from './v-post'
import {mapState, mapActions} from 'vuex'
export default {
  name: "v-posts",
  components:{
    vPost
  },
  computed:{
    ...mapState([
        'posts'
    ])
  },
  methods:{
    ...mapActions([
        'GET_POSTS'
    ])
  },
  mounted() {
      this.GET_POSTS()

  }
}
</script>

<style scoped>

</style>