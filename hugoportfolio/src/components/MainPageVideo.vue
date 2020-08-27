<template>
  <div class="col-md-7 col-10">
    <div class="video-ratio video-border">
      <div class="video-container">
        <video class="p-1" id="videoplayer" playsinline autoplay muted loop controls type="video/mp4">
          <source src="../assets/mainpage/VideoTest.mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPageVideo"
}
</script>

<style scoped>
  #videoplayer{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  .video-container{
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
  }

  .video-border{
    background-color: #2c3e50;
  }

  .video-ratio{
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    position: relative;
  }
</style>