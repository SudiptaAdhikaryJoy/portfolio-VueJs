<template>

  
    <v-app>
      <Navigation to="'/'" />
     
    <v-main>
      <Hero />

      
        <About to="/about" />
      
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </v-main>
  </v-app>
    
</template>

<script>

import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{ Navigation, Hero, About, Projects, Skills, Contact, Footer }
  

  
};
</script>
