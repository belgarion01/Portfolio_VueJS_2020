<template>
  <div id="app">
    <router-view></router-view>
<!--    <Header/>-->
<!--    <div class="mainbody">-->
<!--      <div class="d-flex justify-content-center" style="padding-top: 100px;">-->
<!--        <MainPageVideo/>-->
<!--      </div>-->
<!--      <AboutMe/>-->
<!--      <ProjectPreview-->
<!--          title="NorthDash"-->
<!--          :tags="['C#', 'Unity', 'Project Management', 'Mobile', '3D']"-->
<!--          important_text_enabled="true"-->
<!--          important_text="Published on Playstore"-->
<!--          text="In Digrab you play as a Space Soldier who has crashed on an asteroid. Your ship is under dozens of rocks and your ennemies are still shooting at you. Dig for your ship while protecting yourself from the incomming missiles !-->
<!--              <br>-->
<!--              This game was made with an artiste in 1 month during 2018 summer holidays. I did all the code and integration in Unity. It was my first completed game !"-->
<!--          image="northdash/NorthDash_TitleAsano.png"-->
<!--      />-->
<!--      <ProjectPreview-->
<!--          title="Haut Comme 3 Pommes"-->
<!--          :tags="['C#', 'Unity', 'Tools', 'Project Management', '3D']"-->
<!--          important_text="Showcased at Indiecade Europe 2019"-->
<!--          important_text_enabled="true"-->
<!--          text='  You play as a young boy who has the power to scale up and down objects around you. Depending of the object size, you can use it as a sword, a shield, a raft or even a weapon of massive destruction !-->
<!--                  <br class="b">-->
<!--                  This school project took us 4 month to achieve. I was the programmer out of our 6 people group. I did all the code, some tools for our designers and some 2D/3D integrations. Plus, I was the project manager of our amazing team !'-->
<!--          image="hc3p/HC3P_RoundPreview.png"-->
<!--          link="../HC3P.html"-->
<!--      />-->
<!--      <ProjectPreview-->
<!--        title="Digrab"-->
<!--        :tags="['C#', 'Unity', '2D']"-->
<!--        text="In Digrab you play as a Space Soldier who has crashed on an asteroid. Your ship is under dozens of rocks and your ennemies are still shooting at you. Dig for your ship while protecting yourself from the incomming missiles !-->
<!--              <br>-->
<!--              This game was made with an artiste in 1 month during 2018 summer holidays. I did all the code and integration in Unity. It was my first completed game !"-->
<!--        image="digrab/Digrab_Logo.png"-->
<!--      />-->

<!--    </div>-->
  </div>
</template>

<script>
// import Header from "./components/Header.vue"
// import MainPageVideo from "@/components/MainPageVideo";
// import ProjectPreview from "@/components/ProjectPreview";
// import AboutMe from "@/components/AboutMe";

export default {
  name: 'App',
  components: {
    // Header,
    // MainPageVideo,
    // ProjectPreview,
    // AboutMe
  }
}
</script>

<style>
#app {

}
.Huge{
  height: 2000px;
  width: 100%;
  background-color: antiquewhite;
  position: absolute;
  z-index: -100;
}

h1{
  font-family: Helvetica, sans-serif;
}

p{
  font-family: "Segoe UI", Helvetica, sans-serif;
}



.mainbody{
  background: linear-gradient(to bottom, transparent, rgba(224,224,224, 0.96) 350px), url("./assets/mainpage/Motif-Carreaux.jpg");
  padding-bottom: 10px;
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoeui.ttf");
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoeuib.ttf");
  font-weight: bold;
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoeuii.ttf");
  font-style: italic;
}

</style>
