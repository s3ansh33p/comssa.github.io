<template>
  <b-container fluid>
    <b-row>
      <b-col class="mt-3">
        <h1>About</h1>
        <p>
          ComSSA has been a second family to many computing students and enthusiasts alike, being the biggest Computing orientated
          club at Curtin. <br><br>

          Our aim as a club is to:
          <ul>
            <li>Foster a thriving community of future and active computing professionals and programming enthusiasts.</li>
            <li>Provide a place for students and members with similar interests to study, connect, and enjoy university life.</li>
            <li>
              Provide computing students and our members with opportunities and resources to further their professional development.
              Some of these opportunities include networking with industry professionals and running workshops that expose students to
              industry-relevant technology.
            </li>
          </ul> <br>

          Our <a href="/constitution.pdf">constitution</a> outlines the rules by which ComSSA runs. The ComSSA committee is made up of executive committee members and ordinary committee members.<br><br>
          <!--
          Catch up on previous meetings by reading the meeting minutes
          <NuxtLink to="/minutes">
            here.
          </NuxtLink>
          -->
        </p>
      </b-col>
      <b-col md="auto" class="mt-5">
        <v-lazy-image
          class="mb-5 rounded-corner"
          width="600"
          :src="require(`~/assets/img/revision.jpg`)"
          :src-placeholder="require(`~/assets/img/revision.jpg?lqip&inline`)"
        />
      </b-col>
    </b-row>
    <h2>
      Committee Members
    </h2>
    <h3 class="exec-subheading">
      Executive Committee Members
    </h3>
    <b-row align-h="around" class="mt-3 mb-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Warittha Rayabsri"
          title="President"
          source="v1679318914/ComSSA-Website/Profile/Warittha%20Rayabsri.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Samuel Suhardiman"
          title="Vice President"
          source="v1679318914/ComSSA-Website/Profile/Samuel%20Suhardiman.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Andrew Owens"
          title="Treasurer"
          source="v1679318914/ComSSA-Website/Profile/Andrew%20Owens.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Tui Warihana"
          title="Secretary"
          source="v1679318916/ComSSA-Website/Profile/Tui%20Warihana.webp"
        />
      </b-col>
    </b-row>
    <h3 class="ord-subheading">
      Ordinary Committee Members
    </h3>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Nicholas Lim"
          title="Events Coordinator"
          source="v1691929077/ComSSA-Website/Profile/Nicholas%20Lim.webp"
        />
      </b-col><b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Lauren Rothnie"
          title="Marketing Coordinator"
          source="v1679318920/ComSSA-Website/Profile/Lauren%20Rothnie.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Sean McGinty"
          title="Technical Coordinator"
          source="v1679318917/ComSSA-Website/Profile/Sean%20McGinty.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Nicholas Wright"
          title="Revision Session Coordinator"
          source="v1679318916/ComSSA-Website/Profile/Nicholas%20Wright.webp"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Ethan Olson"
          source="v1679318914/ComSSA-Website/Profile/Ethan%20Olson.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Mori Arvidson"
          source="v1691929076/ComSSA-Website/Profile/Mori%20Arvidson.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Haylee Jackson"
          source="v1691929076/ComSSA-Website/Profile/Haylee%20Jackson.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Justin Pan"
          source="v1691929076/ComSSA-Website/Profile/Justin%20Pan.webp"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Rebecca Masey"
          source="v1691929077/ComSSA-Website/Profile/Sean%20Phay.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Sean Phay"
          source="v1691929077/ComSSA-Website/Profile/Sean%20Phay.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Kai Chen Chai"
          source="v1691929076/ComSSA-Website/Profile/Kai%20Chen%20Chai.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Daniela Degasperi"
          source="v1691929076/ComSSA-Website/Profile/Daniela%20Degasperi.webp"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    head: {
        title: "About"
    }
}
</script>
