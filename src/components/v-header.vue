<template>
  <div class="v-header">
    <div class="links">
      <router-link :to="{name: 'main'}">
        <img class="v-header__logo" src="@/assets/img/logo.jpg">
      </router-link>
      <router-link :to="{name: 'about'}">
        <div class="v-header__link">about</div>
      </router-link>


    </div>
    <img class='v-header__photo' src="@/assets/img/header1.jpeg">

  </div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style lang="scss">

.v-header {
  //max-height: 100px;
  background: black;
  color: red;

  &__photo {
    width: 100%;
    align: center;
  }

  &__logo {
    max-height: 60px;
    margin: 10px;
  }

  &__link {
    margin-left: 10px;
  }

}

.links {
  display: flex;
  align-items: center;
}
</style>