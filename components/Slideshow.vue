<template>
  <div>
    <b-carousel
      :id="css"
      v-model="slide"
      :interval="4000"
      controls
      fade
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="image in images" :key="image">
        <NuxtLink :to="`/${removeExtension(image)}`">
          <b-carousel-slide :img-src="require(`~/assets/img/${rootDir}/${image}`)" />
        </NuxtLink>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
    props: {
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
