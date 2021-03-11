<template>
  <b-container fluid class="profile">
    <b-row class="text-center">
      <b-col>
        <v-lazy-image
          id="rounded-corner"
          :src="require(`~/assets/img/profile/${source}`)"
          :src-placeholder="require(`~/assets/img/profile/${source}?lqip&inline`)"
        />
      </b-col>
    </b-row>
    <b-row id="name" class="text-center">
      <b-col>
        {{ name }}
      </b-col>
    </b-row>
    <b-row id="title" class="text-center">
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
