<template>
  <b-container fluid>
    <h1>{{ page.title }}</h1>https://drive.google.com/drive/folders/1L01aRP06CmL2I64O0qN6EaOo2VE3Lnz9?usp=sharing
    <nuxt-content :document="page" />
  </b-container>
</template>

<script>
export default {
    /* async */ asyncData ({ $content, params, error }) {
        return error({ statusCode: 404 })

        // const page = await $content("minutes", params.minute, "index").fetch()

        // return {
        //     page
        // }
    },
    head: {
        title: "Minutes"
    }
}
</script>
