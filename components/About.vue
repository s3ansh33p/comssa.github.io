<template>
    <div class="about">
        <h1>About</h1>
        <div class="about_info">

            <p> For as long as Curtin University has had a computer science course,
                ComSSA has been the second family to many computing students and enthusiasts alike. <br><br/>

                Our aim is to foster a thriving community of future and active computing professionals, provide
                a place for like-minded members to study, connect, and enjoy university life, and represent students
                in any issues they may have with the Department of Computing or the university as a whole.<br><br/>

                Our constitution outlines the rules by which ComSSA runs, and feel free to read through any of our meeting minutes.<br><br/>
                Catch up on previous meetings by reading the meeting minutes <NuxtLink to="/minutes">here</NuxtLink>.
            </p>

            <img id="about_image_1" src="~/assets/img/revision.jpg"/>
        </div>

        <div class="committee">

            <h2>Committee Members</h2>
            <h3>Executive Committee Members</h3>

            <div class="exec_profile">
                <Profile name="Augustine Italiano"
                        title="President"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="gus.jpg"/>

                <Profile name="Tina Phan"
                        title="Vice President"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="tina.jpg"/>

                <Profile name="Matthew Di Marco"
                    title="Treasurer"
                    email="mailto:faraz@gmail.com"
                    linkedin="https://www.linkedin.com/"
                    source="matt.jpg"/>

                <Profile name="Laura Harris"
                    title="Secretary"
                    email="mailto:faraz@gmail.com"
                    linkedin="https://www.linkedin.com/"
                    source="laura.jpg"/>
            </div>

            <h3 id="ocm_title">Ordinary Committee Members</h3>
            <div class="ocm_profile">
                <div id="row">
                    <Profile name="Anurag Singh"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="anurag.jpg"/>

                    <Profile name="Ben Caudwell"
                            email="mailto:faraz@gmail.com"
                            linkedin="https://www.linkedin.com/"
                            source="ben_c.jpg"/>

                    <Profile name="Ben Heely"
                            email="mailto:faraz@gmail.com"
                            linkedin="https://www.linkedin.com/"
                            source="ben_h.jpg"/>

                    <Profile name="Bryan Wong"
                            email="mailto:faraz@gmail.com"
                            linkedin="https://www.linkedin.com/"
                            source="bryan.jpg"/>
                </div>
                <div id="row">
                    <Profile name="Evan Price"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="evan.jpg"/>

                    <Profile name="Haley Workman"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="haley.jpg"/>

                    <Profile name="Kevin Tanaka"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="kevin.jpg"/>

                    <Profile name="Peter Sessarego"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="peter.jpg"/>
                </div>
                <div id="row">
                    <Profile name="Sophie Lee-Goh"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="sophie.jpg"/>

                    <Profile name="Tanaka Chitete"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="tanaka.jpg"/>

                    <Profile name="Warittha Rayabsri"
                        email="mailto:faraz@gmail.com"
                        linkedin="https://www.linkedin.com/"
                        source="warie.jpg"/>
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
