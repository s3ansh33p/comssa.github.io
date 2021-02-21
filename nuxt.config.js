export default {
    components: true,
    target: "static",
    css: ["~/assets/styles.scss"],
    plugins: ["~/plugins/loadscript.js", "~/plugins/bootstrap.js"],
    modules: ["@nuxt/content"],
    build: {
        transpile: ["vue-plugin-load-script", "@nuxtjs/fontawesome"]
    },

    generate: {
        fallback: "404.html"
    },

    buildModules: [
        "@nuxtjs/eslint-module",
        ["@nuxtjs/fontawesome", {
            component: "fa",
            suffix: false
        }]
    ],

    html: {
        script: [
            {
                crossorigin: "anonymous",
                src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0",
                nonce: "njSg3Gia",
                async: true,
                defer: true
            }
        ]
    },

    head: {
        title: "ComSSA",
        meta: [
            { charset: "utf-8" },
            { viewport: "width=device-width,initial-scale=1.0" },
            { description: "Computer Science Students Association" },
            { property: "og:title", content: "ComSSA" },
            { property: "og:description", content: "Computer Science Students Association" },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "https://comssa.org.au/" },
            { property: "og:image", content: "og.jpg" },
            { property: "og:image:alt", content: "Large ComSSA Logo" },
            { property: "theme-color", content: "#4559A7" },
            { property: "twitter:card", content: "summary_large_image" }
        ],
        link: [
            { rel: "icon", href: "favicon.ico" }
        ]
    }
}
