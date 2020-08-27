<template>
  <b-container fluid class="header">
    <b-row class="justify-content-center">
      <div class="header-background ">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <a href="#" class="navbar-brand">Hugo Raguin</a>
          <div class="d-none d-md-block" style="position: relative; left: 0px; top:0px">
            <img style="height: 50px; width: 10px; margin-left: 10px; " src="../assets/shared/VerticalLine.svg">
          </div>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu" >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarMenu">
            <ul class="navbar-nav">
              <NavigationButton text="About Me" imagePath="shared/Icon_Home.svg"/>
              <NavigationButton text="Main Works" imagePath="shared/Icon_Contact.svg"/>
              <NavigationButton text="Contact" imagePath="shared/Icon_Information.svg"/>
              <NavigationButton text="Resume" imagePath="shared/Icon_Resume.svg"/>
            </ul>
          </div>
        </nav>
      </div>
    </b-row>
  </b-container>
</template>



<script>
//import PlaceholderImage from "@/components/PlaceholderImage";
import NavigationButton from "@/components/NavigationButton";

export default {
  name: "Header",
  components:{
    //PlaceholderImage
    NavigationButton
  }
}


</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

  .header-background{
    //background-color: #2c3e50;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    height: 70px;
    width: 90%;

    @include media-breakpoint-up(md) {
      width: auto;
      display: flex;
    }
  }

  .header{
    position: fixed;
    z-index: 100;

    animation: slideinup 1s ease-out;
  }
  
  @keyframes slideinup {

      0%{
        transform: translateY(-200px);
      }

     100%{
       transform: translateY(0px);
     }
  }

  .navbar{
    @include media-breakpoint-up(md) {
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;

      border-bottom: 2px solid #212121;
      border-right: 2px solid #212121;
      border-left: 2px solid #212121;

      padding: 0.5rem 3rem;
    }

    @include media-breakpoint-up(lg) {
      padding: 0.5rem 5rem;
    }

    .navbar-brand{
      @include media-breakpoint-up(md) {
        font-family: Helvetica;
        //font-weight: bold;
        font-size: 32px;
        margin-right: 0px;
        padding: .3125rem;
      }
    }
  }
</style>