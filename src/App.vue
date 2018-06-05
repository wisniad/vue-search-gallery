<template>
  <div id="app">
    <NavBar/>
    <VueGallery/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import VueGallery from './components/VueGallery'

  export default {
    name: 'App',
    components: {
      NavBar,
      VueGallery,
    }
  }
</script>

<style>
  #blueimp-gallery > a {
    color: white;
  }
  .Aligner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
