<template>
  <li class="navbar-item">
    <a class="nav-button nav-link d-flex flex-row align-items-center" href="#">
      <b-img class="nav-button-icon" :src="require(`../assets/` + this.imagePath)"/>
      <p class="mr-auto nav-button-text">{{ text }}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: "NavigationButton",
  props: {
    text: {
      type: String,
      default: "Catégorie"
    },
    imagePath: {
      type: String,
      default: "shared/Icon_Home.svg"
    }
  },
  methods:{
    getUrl(url){
      return url;
    }
  }
}

</script>

<style lang="scss" scoped>

  .nav-button {
    /*background-color: red;*/
    height: 70px;
    margin-right: 20px;
  }

  .nav-button-icon{
    height: 35px;
    width: 35px;
  }

  .nav-button-text{
    margin-left: 10px;
    font-size: 22px;
  }

  p{
    padding: 0px;
    margin: 0px;
  }
</style>