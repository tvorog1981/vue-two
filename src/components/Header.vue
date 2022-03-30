<template>
<header class="navbar">
 <div class="container">
     <div class="navbar-content">
<router-link :to="logo.url" class="navbar-logo">{{logo.name}}</router-link>
     
      <ul class="navbar-list">
      
<li v-for="link in links" :key="link.alias" class="navbar-item"> <router-link :to="link.url" class="navbar-link">{{link.title}}</router-link></li>
      </ul>
      </div>
    </div>
</header>
   
</template>
<script>
export default {
    props:{
        links:{
            type:Array,
            default:[]
        },
        logo:{
            type:Object,
            default:{}
        }
    }
}
</script>