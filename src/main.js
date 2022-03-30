import { createApp } from 'vue'
import Main from '@/Main.vue'
import Router from '@/routes/'
import './assets/scss/main.scss'
const main  = createApp(Main)
main.use(Router)
main.mount('#main')
