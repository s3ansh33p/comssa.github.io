<template>
  <div class="about">
    <h1>About</h1>
    <div class="about_info">
      <p>
        For as long as Curtin University has had a computer science course,
        ComSSA has been the second family to many computing students and enthusiasts alike. <br><br>

        Our aim is to foster a thriving community of future and active computing professionals, provide
        a place for like-minded members to study, connect, and enjoy university life, and represent students
        in any issues they may have with the Department of Computing or the university as a whole.<br><br>

        Our constitution outlines the rules by which ComSSA runs, and feel free to read through any of our meeting minutes.<br><br>
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
          source="gus.jpg"
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
            name="Ben Heely"
            source="ben_h.jpg"
          />

          <Profile
            name="Bryan Wong"
            source="bryan.jpg"
          />
        </div>
        <div id="row">
          <Profile
            name="Evan Price"
            source="evan.jpg"
          />

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
        </div>
        <div id="row">
          <Profile
            name="Sophie Lee-Goh"
            source="sophie.jpg"
          />

          <Profile
            name="Tanaka Chitete"
            source="tanaka.jpg"
          />

          <Profile
            name="Warittha Rayabsri"
            source="warie.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
