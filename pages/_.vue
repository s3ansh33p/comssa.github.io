<script>
const redirects = {
    grillthedepartment: "https://forms.gle/dJqPdR6KaBC3aNQd8"
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
