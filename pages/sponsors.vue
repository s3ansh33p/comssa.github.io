<template>
  <b-container fluid>
    <h1 class="mt-3">
      Sponsors
    </h1>
    <p>
      ComSSA is grateful to be working with the following organisations to provide opportunities and the best possible experience for our members.
    </p>
    <p>
      For any inquiries about sponsorship, please reach out to <a href="mailto:sponsorship@comssa.org.au">sponsorship@comssa.org.au</a>.
    </p>
    <b-row align-h="around" class="mt-5">
      <b-col cols="4">
        <a href="https://www.powerledger.io/">
          <b-img
            width="450"
            :src="require('~/assets/img/branding/sponsors/powerledger.png')"
            fluid
          />
        </a>
      </b-col>

      <b-col cols="4">
        <a href="https://www.vgw.co/">
          <b-img
            width="450"
            :src="require('~/assets/img/branding/sponsors/vgw.png')"
            fluid
          />
        </a>
      </b-col>
    </b-row>

    <b-row align-h="around" class="mt-5">
      <b-col cols="4">
        <a href="https://www.atlassian.com/">
          <b-img
            width="450"
            :src="require('~/assets/img/branding/sponsors/atlassian.png')"
            fluid
          />
        </a>
      </b-col>

      <b-col cols="4">
        <a href="https://www.imc.com/">
          <b-img
            width="450"
            :src="require('~/assets/img/branding/sponsors/imctrading.png')"
            fluid
          />
        </a>
      </b-col>
    </b-row>

    <b-row align-h="around" class="mt-5">
      <b-col cols="4">
        <a href="https://www.bankwest.com.au/">
          <b-img
            width="450"
            :src="require('~/assets/img/branding/sponsors/bankwest.png')"
            fluid
          />
        </a>
      </b-col>
    </b-row>

    <p class="mt-5">
      ComSSA is proudly partnered with the Curtin School of Electrical Engineering, Computing and Mathematical Sciences.
    </p>

    <b-row align-h="center" class="mt-5">
      <b-col cols="4">
        <a href="https://about.curtin.edu.au/learning-teaching/science-engineering/school-of-electrical-engineering-computing-and-mathematical-sciences/">
          <b-img
            center
            width="150"
            :src="require('~/assets/img/branding/sponsors/eecms.png')"
            fluid
          />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    head: {
        title: "Sponsors"
    }
}
</script>
