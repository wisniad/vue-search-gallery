<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
    <b-navbar-brand>BootstrapVue</b-navbar-brand>
    <b-collapse is-nav id="nav_text_collapse">
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'NavBar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
