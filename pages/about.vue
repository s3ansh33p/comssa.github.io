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
          id="rounded-corner"
          class="mb-5"
          width="600"
          :src="require(`~/assets/img/revision.jpg`)"
          :src-placeholder="require(`~/assets/img/revision.jpg?lqip&inline`)"
        />
      </b-col>
    </b-row>
    <h2>
      Committee Members
    </h2>
    <h3>
      Executive Committee Members
    </h3>
    <b-row align-h="around" class="mt-3 mb-3">
      <b-col>
        <Profile
          name="Augustine Italiano"
          title="President"
          source="augustine.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Tina Phan"
          title="Vice President"
          source="tina.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Matthew Di Marco"
          title="Treasurer"
          source="matt.jpg"
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
    <h3>
      Ordinary Committee Members
    </h3>
    <b-row align-h="around" class="mt-3">
      <b-col>
        <Profile
          name="Anurag Singh"
          source="anurag.jpg"
        />
      </b-col><b-col>
        <Profile
          name="Benjamin Caudwell"
          source="ben_c.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Ben Heely"
          source="ben_h.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Bryan Wong"
          source="bryan.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3">
      <b-col>
        <Profile
          name="Haley Workman"
          source="haley.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Kevin Tanaka"
          source="kevin.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Peter Sessarego"
          source="peter.jpg"
        />
      </b-col>
      <b-col>
        <Profile
          name="Sophie Lee-Goh"
          source="sophie.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3">
      <b-col cols="4">
        <Profile
          name="Tanaka Chitete"
          source="tanaka.jpg"
        />
      </b-col>
      <b-col cols="4">
        <Profile
          name="Warittha Rayabsri"
          source="warittha.jpg"
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
