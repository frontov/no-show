<template>
  <div class="v-footer">
    <!--    <h1>Footer</h1>-->

    <a href="https://www.instagram.com/nevramkah.show/">
      <img class="sl" src="@/assets/icons/insta.png">
    </a>
    <a href="https://vk.com/nevramkah.show">
      <img class="sl" src="@/assets/icons/vk.png">
    </a>
    <a href="https://www.facebook.com/nevramkah.show">
      <img class="sl" src="@/assets/icons/fb.png">
    </a>


  </div>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style>
.v-footer {
  background: black;
}

.sl {
  margin-left: 10px;
  padding: 0;
  border: 0;
  height: 30px;
}

</style>