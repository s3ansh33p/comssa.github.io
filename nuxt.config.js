export default {
    components: true,
    target: "static",
    css: ["~/assets/styles.scss"],
    plugins: ["~/plugins/loadscript.js", "~/plugins/bootstrap.js"],
    modules: ["@nuxt/content"],
    build: {
        transpile: ["vue-plugin-load-script", "@nuxtjs/fontawesome"]
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
            { name: "og:title", content: "ComSSA" },
            { name: "og:description", content: "Computer Science Students Association" },
            { name: "og:type", content: "website" },
            { name: "og:url", content: "https://comssa.org.au/" },
            { name: "og:image", content: "https://i.imgur.com/MffpQVL.jpg" },
            { name: "theme-color", content: "#4559A7" },
            { name: "twitter:card", content: "summary_large_image" }
        ],
        link: [
            { rel: "icon", href: "/favicon.ico" }
        ]
    }
}
