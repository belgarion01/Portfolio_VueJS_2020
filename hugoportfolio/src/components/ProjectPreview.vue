<template>
  <div class="container col-md-8 col-10 preview-bg">
    <a href="@">
      <div class="container-fluid preview-title-bg">
        <h1 class="py-2">{{ title }}</h1>
      </div>
    </a>
    <div class="container-fluid preview-content-bg d-flex flex-wrap flex-column justify-content-center flex-md-row">
      <div class="col-md-8  col-12 d-flex flex-column" id="deepselector">
        <div class="d-flex flex-row flex-wrap">
          <TagList v-bind:tags="this.tags" />
        </div>
        <div class="d-flex align-items-center" v-if="important_text_enabled">
          <b-img src="../assets/shared/Icon_ImportantText.svg" style="max-width: 35px; padding-right: 10px;"/>
          <div class="preview-content-importanttex">{{ important_text }}</div>
        </div>
        <div v-else style="height: 10px"></div>
        <p v-html="text"></p>
      </div>
      <div class="col-md-4 col-7 preview-content-img-container d-flex ml-auto mr-auto ml-md-0 mr-md-0 justify-content-center">
        <router-link :to="this.link" class="d-flex justify-content-center" style="width: 100%;">
          <b-img :src="require(`../assets/` + this.image)" class="preview-content-img align-self-center "/>
        </router-link>
<!--        <b-img :src="require(`../assets/` + this.image)" class="preview-content-img align-self-center "/>-->
      </div>
<!--      <b-img class="preview-content-img col-md-4 col-7 align-self-center ml-auto mr-auto ml-md-0 mr-md-0" :src="require(`../assets/` + this.image)"/>-->
    </div>
  </div>
</template>


<script>
import TagList from "@/components/TagList";

export default {
name: "ProjectPreview",

  components:{
    TagList
  },
  props:{
    title:{
      type: String,
      default: "Project Title"
    },
    tags:{
      type: Array,
      default: ()=>["Hallo", "Salut"]
    },
    important_text_enabled:{
      type: Boolean,
      default: false
    },
    important_text:{
      type: String,
      default: "Important Text"
    },
    text:{
      type: String,
      default: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    image:{
      type: String,
      default: "shared/download.png"
    },
    link:{
      type: String,
      default: "/"
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

  ::v-deep br{
    display: block; /* makes it have a width */
    content: ""; /* clears default height */
    margin-top: 10px; /* change this to whatever height you want it */
  }

a:hover{
  text-decoration: none;
}

.preview-content-img-container{
  position: relative;
}

.preview-content-img{

  max-width: 100%;
  max-height: 100%;
  width: auto;
  height:auto;
  padding: 10px;
  transition: 0.25s cubic-bezier(0.76, 0.01, 0.54, 2.18);

  @include media-breakpoint-down(sm) {
    margin-top: 15px;
    justify-self: center;
    position: relative;
  }

  @include media-breakpoint-up(md) {
    display: block;
    position: absolute;
  }


}

.preview-content-img:hover{
  transform: scale(1.1) rotateX(25deg);
}

  h1{
    margin: 0px;
  }

  p{
    font-size: 16px;
    margin-bottom: 0px;
    padding-left: 0px;


    @include media-breakpoint-down(sm) {
      font-size: 13px;
    }
  }

  br{
    display: block; /* makes it have a width */
    content: ""; /* clears default height */
    margin-top: 10px; /* change this to whatever height you want it */
  }

  .preview-bg{
    border-style: solid;
    border-color: #707070;

    padding: 0px;
    margin-top: 70px;
    margin-bottom: 70px;
  }

  .preview-title-bg{
    background-color: #404040;
  }

  .preview-title-bg>h1{
    color: white;
    font-size: 30px;
  }

  .preview-content-bg{
    background-color: white;
    padding:15px;
  }

  .preview-content-importanttex{
    padding: 10px 0px;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: bold;

    @include media-breakpoint-down(sm) {
      font-size: 15px;
    }
  }
</style>