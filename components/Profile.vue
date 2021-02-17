<template>
  <div class="profile">
    <div id="image_container">
      <img id="image" :src="require(`~/assets/img/profile/${source}`)">
    </div>
    <div id="text_container">
      <div id="name">
        {{ name }}
      </div>
      <div id="title">
        {{ title }}
      </div>
    </div>
  </div>
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
