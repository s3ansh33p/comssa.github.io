<template>
  <b-container fluid class="profile">
    <b-row>
      <b-col>
        <v-lazy-image
          class="rounded-corner portrait"
          :src="require(`~/assets/img/profile/${source}`)"
          :src-placeholder="require(`~/assets/img/profile/${source}?lqip&inline`)"
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
    name: "Profile",
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
    }
}
</script>
