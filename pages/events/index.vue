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
      on our <a href="https://discord.gg/SuwfFfjYJB" target="_blank">
        Discord.
      </a> Follow us on social media to keep up to date with
      the latest events and join our Discord to become a part of the conversation.<br><br>

      Been to an event recently? We would be eager to hear your <NuxtLink to="/events/feedback">
        feedback.
      </NuxtLink><br><br>

      Have a suggestion for a particular event? <NuxtLink to="/events/suggestions">
        Let us know.
      </NuxtLink>
    </p>

    <EventsAccordion
      name="s2tfti2024"
      accordion-text="Talks from the Industry 2 - 2024"
      root-dir="events/s2tfti2024"
      :images="s2tfti2024"
    />

    <EventsAccordion
      name="internationalnightTwo2024"
      accordion-text="International Night 2 - 2024"
      root-dir="events/internationalnightTwo2024"
      :images="internationalnightTwo2024"
    />

    <EventsAccordion
      name="s2bgn2024"
      accordion-text="Board Games Night Semester 2 - 2024"
      root-dir="events/s2bgn2024"
      :images="s2bgn2024"
    />

    <EventsAccordion
      name="hackathon2024"
      accordion-text="ComSSA's Earth's Ultimatum Hackathon - 2024"
      root-dir="events/hackathon2024"
      :images="hackathon2024"
    />

    <EventsAccordion
      name="lan2024"
      accordion-text="LAN Night S1 @ Escape Portal - 2024"
      root-dir="events/lan2024"
      :images="lan2024"
    />

    <EventsAccordion
      name="atr2024"
      accordion-text="Amazing Tech Race - 2024"
      root-dir="events/atr2024"
      :images="atr2024"
    />

    <EventsAccordion
      name="internationalnight2024"
      accordion-text="International Night - 2024"
      root-dir="events/internationalnight2024"
      :images="internationalnight2024"
    />

    <EventsAccordion
      name="tfti2024"
      accordion-text="Talks from the Industry 1 - 2024"
      root-dir="events/tfti2024"
      :images="tfti2024"
    />

    <EventsAccordion
      name="boardgamesnightt2024"
      accordion-text="Board Games Night - 2024"
      root-dir="events/boardgamesnight2024"
      :images="boardgamesnight2024"
    />

    <EventsAccordion
      name="grillthedepartment2024"
      accordion-text="Grill the Department - 2024"
      root-dir="events/grillthedepartment2024"
      :images="grillthedepartment2024"
    />

    <EventsAccordion
      name="guildoday2024"
      accordion-text="Guild O-Day - 2024"
      root-dir="events/guildoday2024"
      :images="guildoday2024"
    />

    <EventsAccordion
      name="networkingsundowner2023"
      accordion-text="Networking Sundowner - 2023"
      root-dir="events/networkingsundowner2023"
      :images="networkingsundowner2023"
    />

    <EventsAccordion
      name="s2lan2023"
      accordion-text="LAN Night S2 @ Escape Portal - 2023"
      root-dir="events/s2lan2023"
      :images="s2lan2023"
    />

    <EventsAccordion
      name="internationalsundowner2023"
      accordion-text="International Networking Sundowner - 2023"
      root-dir="events/internationalsundowner2023"
      :images="internationalsundowner2023"
    />

    <EventsAccordion
      name="hackathon2023"
      accordion-text="ComSSA Hackathon - 2023"
      root-dir="events/hackathon2023"
      :images="hackathon2023"
    />

    <EventsAccordion
      name="atr2023"
      accordion-text="The Amazing Tech Race - 2023"
      root-dir="events/atr2023"
      :images="atr2023"
    />

    <EventsAccordion
      name="tfti2023"
      accordion-text="Talks from the Industry 1 - 2023"
      root-dir="events/tfti2023"
      :images="tfti2023"
    />

    <EventsAccordion
      name="lan2023"
      accordion-text="LAN Night S1 @ Escape Portal - 2023"
      root-dir="events/lan2023"
      :images="lan2023"
    />

    <EventsAccordion
      name="boardgamesnight2023"
      accordion-text="Board Games Night - 2023"
      root-dir="events/boardgamesnight2023"
      :images="boardgamesnight2023"
    />

    <EventsAccordion
      name="grillthedepartment2023"
      accordion-text="Grill the Department - 2023"
      root-dir="events/grillthedepartment2023"
      :images="grillthedepartment2023"
    />

    <EventsAccordion
      name="guildoday2023"
      accordion-text="Guild O-Day - 2023"
      root-dir="events/guildoday2023"
      :images="guildoday2023"
    />

    <EventsAccordion
      name="boardgamesnight2022"
      accordion-text="Board Games Night - 2022"
      root-dir="events/boardgamesnight2022"
      :images="boardgamesnight2022"
    />

    <EventsAccordion
      name="grillthedepartment2022"
      accordion-text="Grill the Department - 2022"
      root-dir="events/grillthedepartment2022"
      :images="grillthedepartment2022"
    />

    <EventsAccordion
      name="guildoday2022"
      accordion-text="Guild O-Day - 2022"
      root-dir="events/guildoday2022"
      :images="guildoday2022"
    />

    <EventsAccordion
      name="hackathon2021"
      accordion-text="ComSSA x IET Hackathon - 2021"
      root-dir="events/hackathon2021"
      :images="hackathon2021"
    />

    <EventsAccordion
      name="lan2021"
      accordion-text="LAN Night @ Escape Portal - 2021"
      root-dir="events/lan2021"
      :images="lan2021"
    />

    <EventsAccordion
      name="tfti2021"
      accordion-text="Talks from the Industry 2 - 2021"
      root-dir="events/tfti2021"
      :images="tfti2021"
    />
  </b-container>
</template>

<script>
// webpack require.context requires static strings so here we are :)
const getLan2021 = () =>
    Array.from(require.context("~/assets/img/events/lan2021", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getGuildODay2021 = () =>
    Array.from(require.context("~/assets/img/events/guildoday2021", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getGrillTheDepartment2021 = () =>
    Array.from(require.context("~/assets/img/events/grillthedepartment2021", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getTFTI2021 = () =>
    Array.from(require.context("~/assets/img/events/tfti2021", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getHackathon2021 = () =>
    Array.from(require.context("~/assets/img/events/hackathon2021", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getHackathon2023 = () =>
    Array.from(require.context("~/assets/img/events/hackathon2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getHackathon2024 = () =>
    Array.from(require.context("~/assets/img/events/hackathon2024", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getBoardGamesNight2022 = () =>
    Array.from(require.context("~/assets/img/events/boardgamesnight2022", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getBoardGamesNight2023 = () =>
    Array.from(require.context("~/assets/img/events/boardgamesnight2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getS2BGN2024 = () =>
    Array.from(require.context("~/assets/img/events/s2bgn2024", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getGrillTheDepartment2022 = () =>
    Array.from(require.context("~/assets/img/events/grillthedepartment2022", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getGrillTheDepartment2023 = () =>
    Array.from(require.context("~/assets/img/events/grillthedepartment2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getGuildODay2022 = () =>
    Array.from(require.context("~/assets/img/events/guildoday2022", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getGuildODay2023 = () =>
    Array.from(require.context("~/assets/img/events/guildoday2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getLan2023 = () =>
    Array.from(require.context("~/assets/img/events/lan2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getTFTI2023 = () =>
    Array.from(require.context("~/assets/img/events/tfti2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getATR2023 = () =>
    Array.from(require.context("~/assets/img/events/atr2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getInternationalSundowner2023 = () =>
    Array.from(require.context("~/assets/img/events/internationalsundowner2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getS2Lan2023 = () =>
    Array.from(require.context("~/assets/img/events/s2lan2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getNetworkingSundowner2023 = () =>
    Array.from(require.context("~/assets/img/events/networkingsundowner2023", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getGuildODay2024 = () =>
    Array.from(require.context("~/assets/img/events/guildoday2024", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getGrillTheDepartment2024 = () =>
    Array.from(require.context("~/assets/img/events/grillthedepartment2024", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getBoardGamesNight2024 = () =>
    Array.from(require.context("~/assets/img/events/boardgamesnight2024", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getTFTI2024 = () =>
    Array.from(require.context("~/assets/img/events/tfti2024", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

const getInternationalNight2024 = () =>
    Array.from(require.context("~/assets/img/events/internationalnight2024", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getATR2024 = () =>
    Array.from(require.context("~/assets/img/events/atr2024", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getLAN2024 = () =>
    Array.from(require.context("~/assets/img/events/lan2024", true, /\.(JPG|jpg|png)$/).keys()).map(s => s.substr(2))

const getInternationalNightTwo2024 = () =>
    Array.from(require.context("~/assets/img/events/internationalnightTwo2024", true, /\.(jpg|png)$/).keys()).map(s => s.substr(2))

const getTFTI2024S2 = () =>
    Array.from(require.context("~/assets/img/events/s2tfti2024", true, /\.(jpg|JPG|png)$/).keys()).map(s => s.substr(2))

export default {
    data () {
        return {
            lan2024: getLAN2024(),
            atr2024: getATR2024(),
            internationalnight2024: getInternationalNight2024(),
            lan2021: getLan2021(),
            lan2023: getLan2023(),
            s2lan2023: getS2Lan2023(),
            guildoday2021: getGuildODay2021(),
            grillthedepartment2021: getGrillTheDepartment2021(),
            tfti2021: getTFTI2021(),
            tfti2023: getTFTI2023(),
            hackathon2021: getHackathon2021(),
            hackathon2023: getHackathon2023(),
            hackathon2024: getHackathon2024(),
            boardgamesnight2022: getBoardGamesNight2022(),
            boardgamesnight2023: getBoardGamesNight2023(),
            s2bgn2024: getS2BGN2024(),
            grillthedepartment2022: getGrillTheDepartment2022(),
            grillthedepartment2023: getGrillTheDepartment2023(),
            grillthedepartment2024: getGrillTheDepartment2024(),
            guildoday2022: getGuildODay2022(),
            guildoday2023: getGuildODay2023(),
            guildoday2024: getGuildODay2024(),
            atr2023: getATR2023(),
            internationalsundowner2023: getInternationalSundowner2023(),
            networkingsundowner2023: getNetworkingSundowner2023(),
            boardgamesnight2024: getBoardGamesNight2024(),
            tfti2024: getTFTI2024(),
            s2tfti2024: getTFTI2024S2(),
            internationalnightTwo2024: getInternationalNightTwo2024()
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
