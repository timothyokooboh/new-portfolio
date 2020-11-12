<template>
  <div id="app">
    <Loader v-if="showLoader === true" />
    <router-view v-if="showLoader === false" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue"
  export default {
    components: {
      Loader
    },
    data() {
      return {
        showLoader: true
      }
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
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    -ms-overflow-style: none;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
    display: none;
  }
</style>
