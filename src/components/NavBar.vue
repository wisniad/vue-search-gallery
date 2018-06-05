<template>
  <b-navbar class="Aligner navbarColor fixed-top">
    <b-nav-form action="" @submit.prevent="pressed">
      <b-navbar-brand href="#">Vue Search Gallery</b-navbar-brand>
      <b-form-input v-model="searchNew" class="mr-sm-2" type="text" placeholder="What image to find?" :value="search"></b-form-input>
      <b-button variant="btn-primary" type="submit">Submit</b-button>
    </b-nav-form>
  </b-navbar>
</template>

<script>
  import store from '../store'

  export default {
    name: 'NavBar',
    data() {
      return {
        msg: 'NavBar',
        searchNew: ''
      }
    },
    computed: {
      search() {
        return store.getters.search;
      }
    },
    methods: {
      pressed() {
        //store.commit('increment',10);
        store.commit('searchNew', this.searchNew)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Shrikhand);

  .navbar-dark {
    -webkit-box-shadow: 0px 3px 15px 0px rgba(245, 14, 14, 0.56);
    -moz-box-shadow: 0px 3px 15px 0px rgba(245, 14, 14, 0.56);
    box-shadow: 0px 3px 15px 0px rgba(245, 14, 14, 0.56);
  }

  .navbar-brand {
    text-transform: uppercase;
    font-family: 'Shrikhand', cursive;
    font-size: 2rem;
    margin-right: 3rem;
  }

  button{
    font-weight: 700;
    margin-left: 1.5rem;
    padding: 0.4rem 1.75rem;
    background-color: #c1c1c1;
  }

  input {
    background-color: #ededed;
  }
  form > button:hover {
    background-color: rgba(130,188,236,0.7);
  }

  .navbarColor {
    background-color: rgba(232, 232, 236, 0.7)
  }
  nav {
    -webkit-box-shadow: 0px 1px 4px 0px rgba(43,43,39,0.65);
    -moz-box-shadow: 0px 1px 4px 0px rgba(43,43,39,0.65);
    box-shadow: 0px 1px 4px 0px rgba(43,43,39,0.65);
  }
</style>
