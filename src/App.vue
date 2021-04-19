<template>
  <div id="app">
    <Loader v-if="showLoader === true" />
    <header-nav v-if="showLoader === false"></header-nav>
    <router-view v-if="showLoader === false" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import HeaderNav from "@/components/HeaderNav.vue";

  export default {
    components: {
      Loader,
      HeaderNav,
    },
    data() {
      return {
        showLoader: true
      }
    },

    methods: {
       click() {
        console.log(this.$validateEmail("tim@gmailcom"))
      },
    },

    mounted() {
      setTimeout(() => {
        this.showLoader = false
      }, 3000)
    }
  }
</script>

<style lang="scss">

  html {
    scroll-behavior: smooth;
    
  }

  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    -ms-overflow-style: none;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    color: #333
  }

  body::-webkit-scrollbar {
    display: none;
  }
</style>
