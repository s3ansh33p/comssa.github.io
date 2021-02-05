export default {
    css: ['~/assets/css/main.css'],
    plugins: ['~/plugins/loadscript.js'],
    modules: ['@nuxt/content'],
    build: {
        transpile: ['vue-plugin-load-script'],
    },
    head: {

    }
}    
