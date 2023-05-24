<template lang="">
    <div>
        <v-row align-center>
            <v-col v-for="image in images" :key="image.src" cols="3">
                <v-img :src="image" aspect-ratio="1" class="grey lighten-2"></v-img>
                <v-card-title class="card" v-text="image.title"></v-card-title>
                <v-card-subtitle class="card" v-text="image.price"></v-card-subtitle>
            </v-col>
        </v-row>
            </div>

</template>
<script>
export default {
    data(){
        return{
            images: [
            {src: require('@/assets/WYJ_BOARD/Top/1.jpg'), title: '브이넥 니트', price: '5,000원'},
            {src: require('@/assets/WYJ_BOARD/Top/2.jpg'), title: 'top2', price: '10,000원'},
            {src: require('@/assets/WYJ_BOARD/Top/3.jpg'), title: 'top3', price: '7,000원'},
            {src: require('@/assets/WYJ_BOARD/Top/4.jpg'), title: 'top4', price: '25,000원'},
        ]
        }
    }
    
}
</script>
<style scoped>
.card{
    text-align: justify;
    font-size: 10px;
}
    
</style>