<template>
    <div class="profile">
        <div id="image_container"><img id="image" :src="require(`~/assets/img/profile/${source}`)" /></div>
        <div id="text_container">
            <div id="name">{{ name }}</div>
            <div id="title">{{ title }}</div>
            <div id="social">
                <a :href=linkedin target="_blank"><img id="linkedin" src="~/assets/img/icon/social/li-c.png"/></a>
                <a :href=email><img id="email"   src="~/assets/img/icon/social/email-c.png"/></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        name: String,
        title: String,
        source: String,
        email: String,
        linkedin: String
    }
}
</script>

<style scoped>
@import '~/assets/css/profile.css';
</style>
