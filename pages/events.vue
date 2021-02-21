<template>
  <div class="events">
    <h1>Events</h1>

    <div class="event_info">
      <p>
        ComSSA regularly hosts events that everyone is welcome to attend.<br><br>

        They include industry talks, workshops, quiz nights, revision sessions, and LAN parties just to name a few! <br><br>

        Our events are listed on the ComSSA <a href="https://www.facebook.com/ComSSACurtin" target="_blank">Facebook page</a>, and announced
        on our <a href="https://discord.gg/SuwfFfjYJB" target="_blank">Discord</a>. Follow us on social media to keep up to date with
        the latest events and join our Discord to become a part of the conversation.<br><br>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    head: {
        title: "Events"
    },

    mounted () { // Facebook embeds do not appear on component mount, for some reason the included script has to be reloaded
        this.$loadScript(
            "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0"
        ).then(() => {
            this.$nextTick(() => {
                window.FB.XFBML.parse()
            })
        }).catch(() => {
        })
    }
}
</script>
