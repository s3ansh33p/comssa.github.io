<script>
const redirects = {
    feedback: "https://forms.gle/R5o4wq9Q2djaLGSx6",
    suggestions: "https://forms.gle/pEA8MzaRAnABjN5f6",
    sundowner: "https://comssasundowner-event.getqpay.com/"
}

export default {
    asyncData ({ redirect, error, params }) {
        const path = params.pathMatch.replace("/", "")
        if (path in redirects) {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
            return redirect(307, redirects[path])
        }

        return error({ statusCode: 404 })
    }
}
</script>
