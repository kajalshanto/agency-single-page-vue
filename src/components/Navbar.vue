<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"  v-smooth-scroll>
          <img :src="require('../assets/img/navbar-logo.svg')" alt />
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ml-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services"  v-smooth-scroll>Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio"  v-smooth-scroll>Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about"  v-smooth-scroll>About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team"  v-smooth-scroll>Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact"  v-smooth-scroll>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0); 
})
export default {
  name: "navbar"
};
</script>

<style lang="css">
#mainNav.sticky {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #212529;
}
#mainNav.sticky .navbar-brand img {
    height: 1.5rem;
}
</style>