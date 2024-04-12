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
      <b-col md="auto" class="mt-5" style="width: 500px;">
        <v-lazy-image
          class="mb-5 rounded-corner"
          width="500"
          :src="'https://res.cloudinary.com/dec6mijn3/image/upload/c_scale,w_1000/v1693068628/ComSSA-Website/General/about_2024'"
          :src-placeholder="'https://res.cloudinary.com/dec6mijn3/image/upload/c_scale,w_200/v1693068628/ComSSA-Website/General/about_2024'"
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
          name="Justin Pan"
          title="President"
          source="v1708440423/ComSSA-Website/Profile-2024/Justin_Pan_evzkb0.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Haylee Jackson"
          title="Vice President"
          source="v1708440418/ComSSA-Website/Profile-2024/Haylee_Jackson_jrj8sq.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Kai Chen Chai"
          title="Treasurer"
          source="v1708440438/ComSSA-Website/Profile-2024/Kai_Chen_Chai_evv3od.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Sean McGinty"
          title="Secretary"
          source="v1708440459/ComSSA-Website/Profile-2024/Sean_McGinty_g0zlsy.jpg"
        />
      </b-col>
    </b-row>
    <h3 class="ord-subheading">
      Ordinary Committee Members
    </h3>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Cindy Lawrence"
          title="Events Coordinator"
          source="v1708440394/ComSSA-Website/Profile-2024/Cindy_Law_taiavl.jpg"
        />
      </b-col><b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Sophie Melville"
          title="Marketing Coordinator"
          source="v1708440464/ComSSA-Website/Profile-2024/Sophie_Melville_amrpp4.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Joseph Scott"
          title="Technical Coordinator"
          source="v1708440434/ComSSA-Website/Profile-2024/Joseph_Scott_d0havo.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Stanley Zhong"
          title="Revision Session Coordinator"
          source="v1708440462/ComSSA-Website/Profile-2024/Stanley_Zhong_obkk99.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Ethan Olson"
          source="v1708440417/ComSSA-Website/Profile-2024/Ethan_Olson_bcbym5.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Alice Arvidson"
          source="v1708440403/ComSSA-Website/Profile-2024/Alice_Arvidson_co2vs2.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Hyeonji Shin"
          source="v1708440394/ComSSA-Website/Profile-2024/Hyeonji_Shin_asd.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Nicholas Wright"
          source="v1708440447/ComSSA-Website/Profile-2024/Nicholas_Wright_esmebk.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Brandon Hale"
          source="v1708440405/ComSSA-Website/Profile-2024/Brandon_Hale_cje5kn.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Nikki Doan"
          source="v1708440449/ComSSA-Website/Profile-2024/Nikki_Doan_j7hzco.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Jacob Jonas"
          source="v1708440422/ComSSA-Website/Profile-2024/Jake_Jonas_tj9p1y.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Patrick Jong"
          source="v1708440447/ComSSA-Website/Profile-2024/Patrick_Jong_bvqef4.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Mia Tran"
          source="v1694963645/ComSSA-Website/Profile-2024/Mia_Tran"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Joleen Chong"
          source="v1694963645/ComSSA-Website/Profile-2024/Joleen_Chong"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Prasanna Asokan"
          source="v1694963645/ComSSA-Website/Profile-2024/Prasanna_Asokan"
        />
      </b-col>
    </b-row>
    <h3 class="ord-subheading">
      Sub-Committee Members
      <!--Added extra row to balance subs better-->
    </h3>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Daniela Degasperi"
          source="v1691929076/ComSSA-Website/Profile/Daniela%20Degasperi.webp"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Clarissa Sutandi"
          source="v1708440405/ComSSA-Website/Profile-2024/Clarissa_Sutandi_tap4nw.jpg"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Khidir Azhar"
          source="v1708440445/ComSSA-Website/Profile-2024/Khidir_Azhar_ffvbws.jpg"
        />
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-3 text-center">
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Hua Chen"
          source="v1694963645/ComSSA-Website/Profile-2024/Hua_Chen"
        />
      </b-col>
      <b-col cols="6" md="3" class="mb-3">
        <CloudProfile
          name="Jeton Hasani"
          source="v1694963645/ComSSA-Website/Profile-2024/Jeton_Hasani"
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
