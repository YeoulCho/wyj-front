<template>
  <v-container>
  <v-carousel hide-delimiters 
              :cycle="cycle" 
              :height="height" 
              :interval="interval" 
              :show-arrows="false">
    <v-carousel-item :height="height"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require("@/assets/WYJ_BOARD/Top/1.jpg")
          },
          {
            src: require("@/assets/WYJ_BOARD/Top/2.jpg")
          },
          {
            src: require("@/assets/WYJ_BOARD/Top/3.jpg")
          },
          {
            src: require("@/assets/WYJ_BOARD/Top/4.jpg")
          },
        ],
        cycle: true,
        height: 200,
        interval: 3000,
      }
    },
  }
</script>
<style scoped>


</style>
