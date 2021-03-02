<template>
  <div class="events">
    <h1>Events</h1>

    <div class="event_info">
      <p>
        ComSSA regularly hosts various events. Events are generally either social events or professional development events.<br><br>

        Social events include LAN parties, laser tag, quiz nights, sundowners, pool, board game nights, ice skating, barbecues
        and various other smaller gatherings.<br><br>

        Professional development events are primarily designed to help computing and STEM students studying at Curtin.
        However, anyone with an interest in programming can attend these events and benefit from them. These events include
        industry talk sessions, workshops designed to enhance students programming skills and revision sessions for first year
        computing units.<br><br>

        Our events are listed on the ComSSA <a href="https://www.facebook.com/ComSSACurtin" target="_blank">Facebook page</a>, and announced
        on our <a href="https://discord.gg/SuwfFfjYJB" target="_blank">Discord</a>. Follow us on social media to keep up to date with
        the latest events and join our Discord to become a part of the conversation.<br><br>

        Been to an event recently? We would be eager to hear your <a href="https://forms.gle/R5o4wq9Q2djaLGSx6">feedback</a>.<br><br>

        Have a suggestion for a particular event? <a href="https://forms.gle/pEA8MzaRAnABjN5f6">Let us know</a>.
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
