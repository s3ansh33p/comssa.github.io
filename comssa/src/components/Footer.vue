<template>
    <div class="footer">
        <div class="content">

            <div class="col1">
                <h1>ComSSA</h1>
                    <p>
                        Department of Computing<br/>
                        Building 314 <br><br/>

                    <a href="https://goo.gl/maps/pBoBbVnBFhNyHnnz9" target="_blank">
                        Curtin University<br/>
                        Kent Street <br/>
                        Bentley WA 6102<br/>
                    </a>
                </p>
            </div>

            <div class="right">
                <div id="col2">
                    <h1>Social</h1>

                    <div id="social_icons">
                        <a href="https://www.facebook.com/ComSSACurtin" target="_blank"><img id="facebook" src="~/assets/img/icon/social/fb-c.png"/></a>

                        <span id="following">
                            <a href="https://www.linkedin.com/company/computer-science-students-association" target="_blank"><img id="linkedin" src="~/assets/img/icon/social/li-c.png"/></a>
                            <a href="https://github.com/ComSSA" target="_blank"><img id="github"   src="~/assets/img/icon/social/gh.png"/></a>
                            <a href="https://discord.gg/SuwfFfjYJB" target="_blank"><img id="discord"   src="~/assets/img/icon/social/discord.png"/></a>
                        </span>
                    </div>

                    <a href="https://www.guild.curtin.edu.au/" target="_blank"><img id="guild_logo" src="~/assets/img/branding/guild.png"/></a>
                </div>
            </div>

                <div id="col3">
                    <h1>Contact</h1>
                    <a href="mailto:contact@comssa.org.au"><p>contact@comssa.org.au</p></a>

                    <p id="accreditation">© ComSSA {{ new Date().getFullYear() }}<br/> Design by <a href="https://kevinle.com.au/" target="_blank">Kevin Le</a></p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
@import '~/assets/css/footer.css';
</style>
