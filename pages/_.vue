<script>
const redirects = {
    grillthedepartment: "https://forms.gle/dJqPdR6KaBC3aNQd8",
    feedback: "https://forms.gle/R5o4wq9Q2djaLGSx6",
    suggestions: "https://forms.gle/pEA8MzaRAnABjN5f6",
    discord: "https://discord.gg/SuwfFfjYJB",
    gamesnight: "https://forms.gle/TDSxErAEp4gutKRv7"
}

export default {
    asyncData ({ redirect, error, params }) {
        if (!(params.pathMatch in redirects)) {
            return error({ statusCode: 404 })
        }

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
        return redirect(307, redirects[params.pathMatch])
    }
}
</script>
