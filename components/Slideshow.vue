<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="image in images" :key="image">
        <div class="slide">
          <NuxtLink v-if="link" :to="removeExtension(image)">
            <b-img
              :id="css"
              :src="require(`~/assets/img/${rootDir}/${image}`)"
            />
          </NuxtLink>
          <b-img
            v-else
            :id="css"
            :src="require(`~/assets/img/${rootDir}/${image}`)"
          />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"

export default {
    components: { VueSlickCarousel },

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
            settings: {
                lazyLoad: "ondemand",
                dots: true,
                fade: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    },
    methods: {
        removeExtension (s) {
            return s.replace(/\.[^/.]+$/, "")
        }
    }
}
</script>
