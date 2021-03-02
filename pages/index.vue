<template>
  <div class="idx">
    <div class="level_1">
      <div id="headline">
        <h1 id="title">
          <span>Com</span>puter <br>
          <span>S</span>cience <br>
          <span>S</span>tudents <br>
          <span>A</span>ssociation
        </h1>

        <div id="join_link">
          <NuxtLink to="/join">
            Join Now
          </NuxtLink>
          <img id="arrow" src="~/assets/img/icon/forward-arr.svg">
        </div>
      </div>

      <Slideshow root-dir="posters" :images="images" />
    </div>

    <div class="level_2">
      <img id="image_2" src="~/assets/img/comssa-stall.jpg">

      <div id="info">
        <h2>Who are we?</h2>

        <p>
          ComSSA is the club that supports computing, computer engineering, and networking
          students at Curtin University. <br><br>

          We also support non-computing students by providing events and services that give
          like minded individuals (anyone interested in programming or computing) a space to find support,
          socialise and communicate.<br><br>

          You do not need to be a computing student. Membership is open to everyone, even if
          you’re not a student! <br><br>

          Committee members can be found throughout the level 2 labs in building 314 or in the
          ComSSA common room (314.345). <NuxtLink to="/about">
            Not sure who we are?
          </NuxtLink> <br><br>

          ComSSA provides a wide <NuxtLink to="/events">
            range of events
          </NuxtLink> and services for its members, such as academic
          assistance, social events and industry orientated events. <br><br>

          ComSSA is affiliated with Curtin Student Guild which means if you are a Curtin student
          and have a voucher from the guild diary then membership is free.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const getPostersArray = () =>
    Array.from(require.context("~/assets/img/posters", true, /\.jpg$/).keys()).map(s => s.substr(2))

export default {
    data () {
        return { images: getPostersArray() }
    },

    head: {
        titleTemplate: "ComSSA"
    }
}
</script>
