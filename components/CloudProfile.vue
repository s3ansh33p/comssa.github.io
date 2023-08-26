<template>
  <b-container fluid class="profile">
    <b-row>
      <b-col>
        <v-lazy-image
          class="rounded-corner portrait"
          :src="image"
          :src-placeholder="placeholder"
        />
      </b-col>
    </b-row>
    <b-row id="name">
      <b-col>
        {{ name }}
      </b-col>
    </b-row>
    <b-row id="title">
      <b-col>
        {{ title }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: "CloudProfile",
    props: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: ""
        },
        source: {
            type: String,
            required: true
        }
    },
    computed: {
        placeholder () {
            return "https://res.cloudinary.com/dec6mijn3/image/upload/c_scale,w_200/" + this.source
        },
        image () {
            return "https://res.cloudinary.com/dec6mijn3/image/upload/c_scale,w_500/" + this.source
        }
    }
}
</script>
