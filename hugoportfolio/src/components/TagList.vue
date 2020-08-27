<template>
  <div class="d-flex flex-wrap">
    <div v-for="(tag, index) in tags" :key="index" class="d-flex">
      <Tag :text="tag"/>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";
export default {
  name: "TagList",
  components: {Tag},
  props:{
    tags:{
      type: Array,
      default: ()=>["Hallo", "Salut"]
    }
  }
}
</script>

<style scoped>

</style>