<template>
<div class="wrapper">
  <TheHeader :links="links" :logo="logo" />
  <div class="wrapper-content">
         <div class="container">
         <router-view></router-view>
         </div>
         </div>
<TheFooter :links="links" />
  </div>

</template>




<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
 import {links,logo} from '@/_config.js'
export default {
 
  name: 'Main',
  components: {
    TheHeader: Header,
    TheFooter: Footer
  },
  data(){
    return{
       links:links,
       logo:logo
       
    }
  }
}
</script>

<style>

</style>
