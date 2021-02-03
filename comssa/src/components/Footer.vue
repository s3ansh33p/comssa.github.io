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
                        <a href="#" target="_blank"><img id="facebook" src="../assets/img/social/fb.png"/></a>

                        <span id="following">
                            <a href="#" target="_blank"><img id="linkedin" src="../assets/img/social/li.png"/></a>
                            <a href="#" target="_blank"><img id="github"   src="../assets/img/social/gh.png"/></a>
                        </span>
                    </div>
                    
                    <a href="https://www.guild.curtin.edu.au/" target="_blank"><img id="guild_logo" src="../assets/img/guild.png"/></a>
                </div>
            </div>

                <div id="col3">
                    <h1>Contact</h1>
                    <a href="mailto:contact@comssa.org.au"><p>contact@comssa.org.au</p></a>

                    <p id="accreditation">© ComSSA 2021 <br/> Original design by <a href="https://kevinle.com.au/" target="_blank">Kevin Le</a></p>
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
@import '../assets/css/footer.css';
</style>