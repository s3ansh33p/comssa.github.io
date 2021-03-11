export default {
    components: true,
    target: "static",
    css: ["~/assets/styles.scss"],
    plugins: ["~/plugins/loadscript.js", "~/plugins/bootstrap.js", "~/plugins/lazyimage.js"],
    modules: ["@nuxt/content"],
    build: {
        transpile: ["vue-plugin-load-script", "@nuxtjs/fontawesome", "vue-agile"]
    },

    generate: {
        fallback: "404.html"
    },

    buildModules: [
        "@aceforth/nuxt-optimized-images",
        "@nuxtjs/eslint-module",
        ["@nuxtjs/fontawesome", {
            component: "fa",
            suffix: false
        }]
    ],

    optimizedImages: {
        optimizeImages: true
        // optimizeImagesInDev: true
    },

    server: {
        port: 3000,
        host: "0.0.0.0"
    },

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
        titleTemplate: "%s / ComSSA",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
            { description: "Computer Science Students Association" },
            { property: "og:title", content: "ComSSA" },
            { property: "og:description", content: "Computer Science Students Association" },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "https://www.comssa.org.au/" },
            { property: "og:image", content: "https://www.comssa.org.au/og.jpg" },
            { property: "og:image:alt", content: "Large ComSSA Logo" },
            { property: "theme-color", content: "#4559A7" },
            { property: "twitter:card", content: "summary_large_image" }
        ],
        link: [
            { rel: "icon", href: "/favicon.ico" }
        ]
    }
}
