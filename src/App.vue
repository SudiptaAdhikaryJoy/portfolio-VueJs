<template>
  <v-app>
    
    <Navigation/>
    <v-main>
      <Hero/> 
      <About/>
      <Projects/>
      <Skills/>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
export default {
  name: 'App',
  components:{ Navigation, Hero, About, Projects, Skills }
  

  
};
</script>
