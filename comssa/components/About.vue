<template>
    <div class="about">
        <h1>About</h1>
        <div class="about_info">

            <p> For as long as Curtin University has had a computer science course,
                ComSSA has been the second family to many computing students and enthusiasts alike. <br><br/>

                Our aim is to foster a thriving community of future and active computing professionals, provide
                a place for like-minded members to study, connect, and enjoy university life, and represent students
                in any issues they may have with the Department of Computing or the university as a whole.<br><br/>

                Our constitution outlines the rules by which ComSSA runs, and feel free to read through any of our meeting minutes.
                Catch up on previous meetings by reading the meeting minutes <NuxtLink to="/minutes">here</NuxtLink>.
            </p>

            <img id="about_image_1" src="~/assets/img/revision.jpg"/>
        </div>

        <div class="committee">

            <h2>Committee Members</h2>
            <h3>Executive Committee Members</h3>

            <div class="exec_profile"> <!--Put images in the assets/img/profile/ directory - Recommended 200x230px-->
                <Profile name="Faraz Faith"
                        title="President"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                <Profile name="Faraz Faith"
                        title="Vice President"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                <div id="gap"/>

                <Profile name="Faraz Faith"
                    title="Treasurer"
                    email="mailto:faraz@gmail.com"
                    linkedin="https://www.linkedin.com/"
                    source="faraz.jpg"/>
                <div id="gap"/>

                <Profile name="Faraz Faith"
                    title="Secretary"
                    email="mailto:faraz@gmail.com"
                    linkedin="https://www.linkedin.com/"
                    source="faraz.jpg"/>

            </div>

            <h3 id="ocm_title">Ordinary Committee Members</h3>


            <div class="ocm_profile">
                <div id="row">
                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                            email="mailto:faraz@gmail.com"
                            linkedin="https://www.linkedin.com/"
                            source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                </div>

                <div id="row">
                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                    <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                        <div id="gap"/>

                    <Profile name="Faraz Faith"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="faraz.jpg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Profile from './Profile.vue';

export default {
    name: 'About',
    components: {
        Profile
    }
}
</script>

<style scoped>
@import '~/assets/css/about.css';
</style>
