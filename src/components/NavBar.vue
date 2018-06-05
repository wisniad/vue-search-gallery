<template>
  <b-navbar toggleable type="dark" variant="dark">
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
  .navbar-dark {
    -webkit-box-shadow: 0px 3px 15px 0px rgba(245,14,14,0.56);
    -moz-box-shadow: 0px 3px 15px 0px rgba(245,14,14,0.56);
    box-shadow: 0px 3px 15px 0px rgba(245,14,14,0.56);
  }
  bg-dark{
    background-color: #060606;

  }
  .navbar-text{
    color: #F50E0E;
  }
</style>
