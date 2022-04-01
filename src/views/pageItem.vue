<template>
<div v-if="item">
    <Card  :imgUrl="item.img" :title="item.title" :name="`${item.lvl} lvl`">
    
          
          {{item.desc}}
      <template v-slot:home>
    <router-link class="btn btnPrimary"  to="/">HOME</router-link>
      </template>
  
          </Card>
      </div>
</template>


<script>
    import items from '@/seeders/items.js'
    import Card from '@/components/UI/Card.vue'
export default {
  components:{
      Card
  },
   data(){
       return{
           item:null
       }
   },
   created(){
       const alias = this.$route.params.itemAlias
       this.item  =  items.find(el=> el.alias === alias)
       console.log(this.item)
   }
}
</script>
