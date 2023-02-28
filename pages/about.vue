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
    <b-row align-h="around" class="mt-3 mb-3">
      <b-col>
        <Profile
          name="Warittha Rayabsri"
          title="President"
          source="Warittha Rayabsri.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Samuel Suhardiman"
          title="Vice President"
          source="Samuel Suhardiman.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Andrew Owens"
          title="Treasurer"
          source="Andrew Owens.png"
        />
      </b-col>
      <b-col>
        <Profile
          name="Tui Warihana"
          title="Secretary"
          source="Tui Warihana.png"
        />
      </b-col>
    </b-row>
    <h3 class="ord-subheading">
      Ordinary Committee Members
    </h3>
    <b-row align-h="around" class="mt-3">
      <b-col>
        <Profile
          name="Nicholas Lim"
          title="Events Coordinator"
          source="Nicholas Lim.png"
        />
      </b-col><b-col>
        <Profile
          name="Lauren Rothnie"
          title="Marketing Coordinator"
          source="Lauren Rothnie.png"
        />
      </b-col>
      <b-col>
        <Profile
          name="Sean McGinty"
          title="Technical Coordinator"
          source="Sean McGinty.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Nicholas Wright"
          title="Revision Session Coordinator"
          source="Nicholas Wright.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3">
      <b-col>
        <Profile
          name="Ethan Olson"
          source="Ethan Olson.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Franco Forgione Velazco"
          source="Franco Forgione Velazco.png"
        />
      </b-col>
      <b-col>
        <Profile
          name="Haylee Jackson"
          source="Haylee Jackson.png"
        />
      </b-col>
      <b-col>
        <Profile
          name="Justin Pan"
          source="Justin Pan.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3">
      <b-col cols="3">
        <Profile
          name="Nathanial Brown"
          source="Nathanial Brown.png"
        />
      </b-col>
      <b-col cols="3">
        <Profile
          name="Tayo Kaswilo"
          source="Tayo Kaswilo.jpg"
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
