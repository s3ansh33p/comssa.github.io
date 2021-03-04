<template>
  <b-container fluid>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </b-container>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        const page = await $content("minutes", params.minute, "index").fetch()

        return {
            page
        }
    },
    head: {
        title: "Minutes"
    }
}
</script>
