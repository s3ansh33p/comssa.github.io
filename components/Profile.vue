<template>
  <b-container class="profile">
    <div>
      <b-img id="rounded-corner" :src="require(`~/assets/img/profile/${source}`)" />
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
