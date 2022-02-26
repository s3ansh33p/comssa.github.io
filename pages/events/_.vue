<template>
  <div />
</template>

<script>
const redirects = {
    feedback: "https://forms.gle/R5o4wq9Q2djaLGSx6",
    suggestions: "https://forms.gle/pEA8MzaRAnABjN5f6",
    grill_the_department: "/"
}

export default {
    asyncData ({ error, params }) {
        const path = params.pathMatch.replace("/", "")
        if (path in redirects) {
            window.location.replace(redirects[path])
        } else {
            return error({ statusCode: 404 })
        }
    }
}
</script>
