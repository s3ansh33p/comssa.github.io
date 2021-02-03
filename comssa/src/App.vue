<template>
  <div id="app">
    <NavBar/>
    
    <Home/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Home
  }
}
</script>

<style>
  /*Global styles are applied here */ 

  body{
      margin:0px;
  } 

  h1 {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  p {
    font-family: 'Roboto Mono', sans-serif;
  }

  img {
    border-radius: 10px;
  }

  ::-moz-selection { /* Code for Firefox */
    color: white;
    background: #4359a4;
  }

  ::selection {
    color: white;
    background: #4359a4;
  }
</style>
