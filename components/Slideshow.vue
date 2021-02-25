<template>
  <agile
    :nav-buttons="false"
    :autoplay-speed="4000"
    :speed="3000"
    fade="fade"
    pause-on-hover="pause-on-hover"
    pause-on-dots-hover="pause-on-dots-hover"
    autoplay="autoplay"
  >
    <div v-for="image in images" :key="image">
      <img class="slide" :src="require(`~/assets/img/${rootDir}/${image}`)">
    </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile"

export default {
    components: {
        agile: VueAgile
    },

    props: {
        rootDir: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        }
    }
}
</script>
