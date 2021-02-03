<template>
    <div class="navbar">
        <div id="items">
            <img id="logo" src="../assets/img/comssa.jpg">

            <div class="links" id="links">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Sponsors</a></li>
                    <li><button>Join Now</button></li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
@import '../assets/css/navbar.css';
</style>