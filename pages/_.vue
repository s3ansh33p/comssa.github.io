<script>
const redirects = {
    grillthedepartment: "https://forms.gle/dJqPdR6KaBC3aNQd8"
}

export default {
    asyncData ({ redirect, error, params }) {
        if (!(params.pathMatch in redirects)) {
            return error({ statusCode: 404 })
        }

        return redirect(301, redirects[params.pathMatch])
    }
}
</script>
