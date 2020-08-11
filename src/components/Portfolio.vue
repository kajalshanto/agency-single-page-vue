<template>
  <div id="portfolio">
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6 mb-4" v-for="(obj, key) in portfoilioJSON" :key="key">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" :href="`${obj.id}`">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  :src="require(`@/assets/img/portfolio/${obj.img}`)"                  
                  alt
                />
                <!-- :src="require('../assets/img/portfolio/01-thumbnail.jpg')" -->
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">{{ obj.caption }}</div>
                <div class="portfolio-caption-subheading text-muted">{{ obj.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "portfolio",

  data: () => ({
    portfoilioJSON: [
      {
        img: "01-thumbnail.jpg",
        caption: "Explore",
        title: "Graphic Design",
        id: "#portfolioModal1"
      },
      {
        img: "02-thumbnail.jpg",
        caption: "Finish",
        title: "Identity",
        id: "#portfolioModal2"
      },
      {
        img: "03-thumbnail.jpg",
        caption: "Liness",
        title: "Awesome Project",
        id: "#portfolioModal3"
      },
      {
        img: "04-thumbnail.jpg",
        caption: "Threads",
        title: "Illustration",
        id: "#portfolioModal4"
      },

      {
        img: "05-thumbnail.jpg",
        caption: "Finish",
        title: "Identity",
        id: "#portfolioModal5"
      },

      {
        img: "06-thumbnail.jpg",
        caption: "Coffee",
        title: "Drink a lot",
        id: "#portfolioModal6"
      },
    ],
  }),
};
</script>

<style lang="scss">
</style>