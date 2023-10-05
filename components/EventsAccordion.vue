<template>
  <div>
    <b-button v-b-toggle="name" block class="mt-2 comssa-btn">
      {{ accordionText }}
    </b-button>

    <!-- All accordions must has different v-models to support opening more than one, hence the unique name -->
    <b-collapse :id="name" :v-model="name" @show="loadIn = true">
      <b-row v-if="loadIn" align-h="center" class="mt-3 mb-5">
        <b-col>
          <Slideshow :link="false" css="events-carousel" :root-dir="rootDir" :images="images" />
        </b-col>
      </b-row>
    </b-collapse>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        accordionText: {
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
            // Controls lazy load
            loadIn: false
        }
    }
}
</script>
