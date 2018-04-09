<template>
  <div>
    <fd-header v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/Header/Header.vue'
  export default {
    components: {
      'fd-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body
    box-sizing border-box
    width 100%
    height 100%
    min-width 1366px
    min-height 100%
    background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
  body
    overflow auto
    padding-top 61px
  h2
    height 1000px
</style>
