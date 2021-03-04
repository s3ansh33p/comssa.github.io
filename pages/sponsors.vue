<template>
  <b-container fluid>
    <h1 class="mt-3">
      Sponsors
    </h1>
    <p>We are fortunate to have these sponsors who are generous enough to give us their support. </p>
    <b-row align-h="center" class="mt-5">
      <b-col cols="4">
        <a href="https://www.imc.com/">
          <b-img
            width="350"
            :src="require('~/assets/img/branding/sponsors/imc.png')"
            fluid
          />
        </a>
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-5">
      <b-col cols="4">
        <a href="https://www.accenture.com/">
          <b-img
            :src="require('~/assets/img/branding/sponsors/accenture.png')"
            fluid
          />
        </a>
      </b-col>
      <b-col cols="4">
        <a href="https://www.atlassian.com/">
          <b-img
            :src="require('~/assets/img/branding/sponsors/atlassian.png')"
            fluid
          />
        </a>
      </b-col>
    </b-row>
    <b-row align-h="around" class="mt-5">
      <b-col cols="4">
        <a href="https://www2.deloitte.com/">
          <b-img
            :src="require('~/assets/img/branding/sponsors/deloitte.png')"
            fluid
          />
        </a>
      </b-col>
      <b-col cols="4">
        <a href="https://www.vgw.co/">
          <b-img
            :src="require('~/assets/img/branding/sponsors/vgw.png')"
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
