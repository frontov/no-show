<template>
  <div class="v-post">
        <p>{{ text }}</p>

  </div>
</template>

<script>
export default {
  name: "v-post",
  props: {
    text: {
      type: String,
      default: () => ''
    },
    img: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped>

</style>