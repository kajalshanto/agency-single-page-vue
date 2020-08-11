<template>
  <div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 my-3" v-for="(obj, key) in clientsJson" :key="key">
            <a href="#!">
              <img
                class="img-fluid d-block mx-auto"
                :src="require(`@/assets/img/logos/${obj.img}`)"
                alt
              />
            </a>
          </div>

          <!-- <div class="col-md-3 col-sm-6 my-3">
            :src="require(`@/xxx/${name}.png`)"
            :src="require(`@/assets/img/logos/${obj.img}`)"

            <a href="#!">
              <img
                class="img-fluid d-block mx-auto"
                :src="require('../assets/img/logos/designmodo.jpg')"
                alt
              />
            </a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                class="img-fluid d-block mx-auto"
                :src="require('../assets/img/logos/themeforest.jpg')"
                alt
              />
            </a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                class="img-fluid d-block mx-auto"
                :src="require('../assets/img/logos/creative-market.jpg')"
                alt
              />
            </a>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    clientsJson: [
      {
        img: "envato.jpg",
      },
      {
        img: "themeforest.jpg",
      },
      {
        img: "designmodo.jpg",
      },
      {
        img: "creative-market.jpg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>