<template>
  <div class="car">
    <carousel :settings="settings">
 
 
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card  :imgUrl="item.img" :title="item.title" :name="`${item.lvl} lvl`" :alias="item.alias">
                <template v-slot:show>
 <router-link class="btn btnPrimary" :to="item.alias">SHOW</router-link>
                </template>
               
          {{item.desc}}
      </Card>
    </slide>
    <template #addons>
      <navigation />
    
    </template>
     </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide,  Navigation } from 'vue3-carousel';
import Card from '@/components/UI/Card.vue'
import items from '@/seeders/items.js'
export default {
   components:{
     Card,
    Carousel,
    Slide,
 
    Navigation,}, 
  
  data(){
    return{
         items:items,
         settings:{
     itemsToShow:1,
     autoPlay: 0.02,
     currentSlide:3,
     autoplay:5000,
     wrapAround:true

         }
    }
  }
}
</script>
<style scoped>
.car{
  margin: 0 auto;
  
  width:250px;
  height: 20px !important;

}
</style>