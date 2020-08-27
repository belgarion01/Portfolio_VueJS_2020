<template>
  <div class="container col-md-8 col-10 aboutme-bg">
    <div class="container-fluid aboutme-title-bg">
      <h1 class="py-2 text-center">About me</h1>
    </div>
    <div class="container aboutme-content-bg py-2 d-flex">
      <div class="d-none d-sm-block col-sm-1 d-sm-flex col-2 justify-content-center justify-content-center" style="position: relative;">
        <b-img class="align-self-center py-2 aboutme-curly" src="../assets/shared/Misc_CurlyBracket.svg"></b-img>
      </div>

<!--  d-none d-sm-block col-sm-1 d-sm-flex    -->

      <div style="font-size: 15px" class="col-sm-10 col-12 my-4">
        <ul style="margin: 0px; padding: 0px">
          <div>Hi ! I'm Hugo, a Junior Gameplay Programmer. I've always <b>admired artists</b> and their creations. That pushed me to take a path where I could be close to them. I had no artistic talent - I could not be like them - so <b>I chose to help them make their creations come to life</b> instead !</div>
          <br>
          <div><b>Former Game designer</b>, I fell in love with the binary world. I, now, put a lot of effort into making <b>a game where everyone on the team can be proud of</b>. I like to discover new things around digital creations and above all that : Dinosaures.</div>
        </ul>
      </div>

      <div class="d-none d-sm-block col-sm-1 d-sm-flex justify-content-center" style="position: relative">
        <b-img class="align-self-center py-2 aboutme-curly" src="../assets/shared/Misc_CurlyBracket.svg" style="transform: scaleX(-1)"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "AboutMe"
}
</script>

<style lang="scss" scoped>

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.aboutme-bg{
  background-color: white;

  border-style: solid;
  border-color: #707070;

  padding: 0px;
  margin-top: 70px;
  margin-bottom: 70px;
}

.aboutme-title-bg{
  background-color: #304870;
}

.aboutme-title-bg > h1{
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 30px;
  margin: 0px;
}

.aboutme-curly{
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}

ul>div{
  font-size: 16px;

  @include media-breakpoint-down(sm) {
    font-size: 13px;
  }
}

</style>