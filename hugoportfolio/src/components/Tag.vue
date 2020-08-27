<template>
  <div class="tag-bg d-flex align-items-center" :style="tagBg" >
    <div class="tag-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
name: "Tag",
  props:{
    text:{
      type: String,
      default: "Tag"
    },
    color:{
      type: String,
      default: "#42b983"
    }
  },
  computed:{
    tagBg(){
      return "background-color: " + this.getColor(this.text);
    }
  },
  methods:{
    getColor(_tag){
      switch (_tag){
        case 'C#':
          return "#1E37C6";
        case 'Unity':
          return "#1E9FC6";
        case 'Project Management':
          return "#C61E1E";
        case 'Tools':
          return "#C6C61E";
        case '3D':
          return "#42b983";
        case '2D':
          return "#C67E1E";
        case 'UE4':
          return "#9B1EC6";
        case 'Mobile':
          return "#C61E98";
        default: return "#42b983";
      }
    }
  }
}
</script>

<style scoped>


.tag-bg{
  background-color: #42b983;
  height: 25px;
  margin-right: 5px;
  border-radius: 26px;
  margin-top: 3px;
}

.tag-text{
  padding: 10px 15px;
  color: white;
  white-space: nowrap;
}
</style>