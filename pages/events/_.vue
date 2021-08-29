<script>
const redirects = {
    feedback: "https://forms.gle/R5o4wq9Q2djaLGSx6",
    suggestions: "https://forms.gle/pEA8MzaRAnABjN5f6",
    "ComSSA-LAN": "https://comssalan.getqpay.com/"
}

export default {
    asyncData ({ redirect, error, params }) {
        const path = params.pathMatch.replace("/", "")
        if (path in redirects) {
            window.location.replace(redirects[path])
        }

        return error({ statusCode: 404 })
    }
}
</script>
