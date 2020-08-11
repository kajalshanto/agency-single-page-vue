<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- Masthead-->
    <Hero></Hero>
    <!-- Services-->
    <Service></Service>
    <!-- Portfolio Grid-->
    <Portfoilo></Portfoilo>
    <!-- About-->
    <About></About>
    <!-- Team-->
    <Team></Team>
    <!-- Clients-->
    <Clients></Clients>
    <!-- Contact-->
    <Contact></Contact>
    <!-- Footer-->
    <Footer></Footer>
    <!-- Portfolio Modals-->
    <!-- Modals -->
    <Modals></Modals>
  </div>
</template>


<script> 
import Portfoilo from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modals from "./components/Modals";




export default {
  name: "App",
  components: {
    Portfoilo,
    Navbar,
    Hero,
    Service,
    About,
    Team,
    Clients,
    Contact,
    Footer,
    Modals
  },
};
</script>

<style>
</style>
