<template>
  <v-app>
    
    <Navigation/>
    <v-main>
      <Hero/> 

    </v-main>
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
export default {
  name: 'App',
  components:{ Navigation, Hero }
  

  
};
</script>
