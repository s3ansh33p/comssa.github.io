export default {
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
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,400&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;600;700&display=swap" }
        ]
    }
}
