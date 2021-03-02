<template>
  <div class="about">
    <h1>About</h1>
    <div class="about_info">
      <p>
        ComSSA has been a second family to many computing students and enthusiasts alike, being the biggest Computing orientated
        club at Curtin. <br><br>

        Our aim as a clube is to:
        <ul>
          <li>Foster a thriving community of future and active computing professionals and programming enthusiasts.</li>
          <li>Provide a place for students and members with similar interests to study, connect, and enjoy university life.</li>
          <li>
            Provide computing students and our members with opportunities and resources to further their professional development.
            Some of these opportunities include networking with industry professionals and running workshops that expose students to
            industry-relevant technology.
          </li>
        </ul> <br>

        Our constitution outlines the rules by which ComSSA runs. The ComSSA committee is made up of executive committee members and ordinary committee members.<br><br>

        Catch up on previous meetings by reading the meeting minutes
        <NuxtLink to="/minutes">
          here.
        </NuxtLink>
      </p>

      <img id="about_image_1" src="~/assets/img/revision.jpg">
    </div>

    <div class="committee">
      <h2 id="committee_heading">
        Committee Members
      </h2>
      <h3 id="ecm_title">
        Executive Committee Members
      </h3>

      <div class="exec_profile">
        <Profile
          name="Augustine Italiano"
          title="President"
          source="augustine.jpg"
        />

        <Profile
          name="Tina Phan"
          title="Vice President"
          source="tina.jpg"
        />

        <Profile
          name="Matthew Di Marco"
          title="Treasurer"
          source="matt.jpg"
        />

        <Profile
          name="Laura Harris"
          title="Secretary"
          source="laura.jpg"
        />
      </div>

      <h3 id="ocm_title">
        Ordinary Committee Members
      </h3>
      <div class="ocm_profile">
        <div id="row">
          <Profile
            name="Anurag Singh"
            source="anurag.jpg"
          />

          <Profile
            name="Benjamin Caudwell"
            source="ben_c.jpg"
          />

          <Profile
            name="Ben Heeley"
            source="ben_h.jpg"
          />
          <Profile
            name="Bryan Wong"
            source="bryan.jpg"
          />
        </div>
        <div id="row">
          <Profile
            name="Haley Workman"
            source="haley.jpg"
          />

          <Profile
            name="Kevin Tanaka"
            source="kevin.jpg"
          />
          <Profile
            name="Peter Sessarego"
            source="peter.jpg"
          />
          <Profile
            name="Sophie Lee-Goh"
            source="sophie.jpg"
          />
        </div>
        <div id="center">
          <Profile
            name="Tanaka Chitete"
            source="tanaka.jpg"
          />
          <Profile
            name="Warittha Rayabsri"
            source="warittha.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    head: {
        title: "About"
    }
}
</script>
