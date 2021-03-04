<template>
  <b-container fluid>
    <h1 class="mt-3">
      Events
    </h1>
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

    <h3>
      Guild O-Day 2021
    </h3>

    <b-row align-h="center" class="mt-3">
      <Slideshow css="events-carousel" root-dir="events/guildoday" :images="guildoday" />
    </b-row>

    <h3 class="mt-3">
      Sundowner 2020
    </h3>

    <b-row align-h="center" class="mt-3">
      <Slideshow css="events-carousel" root-dir="events/sundowner2020" :images="sundowner2020" />
    </b-row>
  </b-container>
</template>

<script>
const getGuildODay = () =>
    Array.from(require.context("~/assets/img/events/guildoday", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getSundowner2020 = () =>
    Array.from(require.context("~/assets/img/events/sundowner2020", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

export default {
    data () {
        return {
            guildoday: getGuildODay(),
            sundowner2020: getSundowner2020()
        }
    },

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
