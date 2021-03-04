<template>
  <b-container class="profile">
    <div>
      <v-lazy-image
        id="rounded-corner"
        :src="require(`~/assets/img/profile/${source}`)"
        :src-placeholder="require(`~/assets/img/profile/${source}?lqip&inline`)"
      />
    </div>
    <div>
      <div id="name">
        {{ name }}
      </div>
      <div id="title">
        {{ title }}
      </div>
    </div>
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
