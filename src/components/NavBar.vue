<template>
  <b-navbar type="light" variant="light" class="Aligner">
    <b-nav-form action="" @submit.prevent="">
      <b-navbar-brand href="#">Vue Search Gallery</b-navbar-brand>
      <b-form-input v-model="searchNew" class="mr-sm-2" type="text" placeholder="Search" :value="search"></b-form-input>
      <button @click="pressed">Search new images</button>
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
  .navbar-dark {
    -webkit-box-shadow: 0px 3px 15px 0px rgba(245, 14, 14, 0.56);
    -moz-box-shadow: 0px 3px 15px 0px rgba(245, 14, 14, 0.56);
    box-shadow: 0px 3px 15px 0px rgba(245, 14, 14, 0.56);
  }

  bg-dark {
    background-color: #060606;

  }

</style>
