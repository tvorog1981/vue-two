<template>
    <div class="card">
        <div class="card-img__wrapper" v-if="imgUrl">
            <img :src="imgUrl" alt="">
        </div>
         
        <span class="card-name">{{name}}</span>
        <span class="card-title">{{ title}}</span>
        <div class="card-body">
             
               
             <slot name="show">
            
             </slot>
             <slot name="home">
            
             </slot>
        </div>
    </div>
</template>

<script>


export default {
   props:{
       title:{
           type:String,
           default:''
       },
       name:{
           type:String,
           default:''
       },
       imgUrl:{
           type:String
       },
       alias:{
           type:String
       }


   }
}
</script>
