<!--Use this as a template for additional pages, currently this is a placeholder 
for future meeting minutes the included style below (in the style tags) adds left 
and right margins to centre the content onto the page

Visit this page (already set as route in main.js) at url/minutes 
-->

<template>
    <div class="mydiv">
        <h1>Meeting Minutes</h1> <!--Font for this is set in App.vue and defaults to Montserrat-->
    </div>
</template>

<script>
export default {
    name: 'Minutes'
}
</script>

<style scoped>
.mydiv {
    /*These settings centre the content in mydiv on the component displayed */

    margin: auto;

    margin-top: 100px;

    width: 80%;
    max-width: 1400px;
}

/*Reference your own CSS file once you start working on this - 
You will need to use media queries to make it responsive  */
</style>