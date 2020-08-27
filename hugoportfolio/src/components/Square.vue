<template>
  <div v-bind:style="{backgroundColor: bgColor}">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
name: "Square",
  data: function (){
    return {
      bgColor: this.color
    }
  },
  props:{
    text: String,
    color:{
      type: String,
      default: "black"
    }
  }
}
</script>

<style scoped>
  div{
    background-color: #2c3e50;
    min-height: 100px;
  }

  p{
    color: white;
  }
</style>