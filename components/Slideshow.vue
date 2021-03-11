<template>
  <agile
    :id="css"
    :nav-buttons="false"
    :autoplay-speed="4000"
    :speed="1000"
    fade="fade"
    pause-on-hover="pause-on-hover"
    pause-on-dots-hover="pause-on-dots-hover"
    autoplay="autoplay"
  >
    <div v-for="image in images" :key="image">
      <div class="slide">
        <NuxtLink v-if="link" :to="removeExtension(image)">
          <v-lazy-image
            :id="css"
            :src="require(`~/assets/img/${rootDir}/${image}`)"
            :src-placeholder="require(`~/assets/img/${rootDir}/${image}?lqip&inline`)"
          />
        </NuxtLink>
        <v-lazy-image
          v-else
          :id="css"
          :src="require(`~/assets/img/${rootDir}/${image}`)"
          :src-placeholder="require(`~/assets/img/${rootDir}/${image}?lqip&inline`)"
        />
      </div>
    </div>
  </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile"

export default {
    components: {
        agile: VueAgile
    },

    props: {
        link: {
            type: Boolean,
            required: true
        },
        css: {
            type: String,
            required: true
        },
        rootDir: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        removeExtension (s) {
            return s.replace(/\.[^/.]+$/, "")
        },

        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    }
}
</script>
