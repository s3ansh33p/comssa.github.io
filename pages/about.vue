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
          source="warittha.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Ben Caudwell"
          title="Vice President"
          source="ben.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Moritz Bergemann"
          title="Treasurer"
          source="moritz.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Laura Harris"
          title="Secretary"
          source="laura.jpg"
        />
      </b-col>
    </b-row>
    <h3 class="ord-subheading">
      Ordinary Committee Members
    </h3>
    <b-row align-h="around" class="mt-3">
      <b-col>
        <Profile
          name="Andrew Owens"
          source="andrew.jpg"
        />
      </b-col><b-col>
        <Profile
          name="Bethany Ellis"
          source="bethany.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Eillie Shi"
          source="eillie.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Jolyon Fereday"
          source="jolyon.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3">
      <b-col>
        <Profile
          name="Joshua Macaulay"
          source="joshua.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Nathan Poon"
          source="moon.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Samuel Suhardiman"
          source="samuel.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Sophie Jong"
          source="sophie.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3">
      <b-col cols="3">
        <Profile
          name="Wern Kuang Chai"
          source="chai.jpg"
        />
      </b-col>
      <b-col cols="3">
        <Profile
          name="Zachary Kidd-Smith"
          source="zachary.jpg"
        />
      </b-col>
      <b-col cols="3">
        <Profile
          name="Ethan Olson"
          source="ethan.jpg"
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
