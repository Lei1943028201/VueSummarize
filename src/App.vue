<template>
  <div>
    <ele-header v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/Header/Header.vue'
  export default {
    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    .tab-item
      display inline-block
      .router-link-active
        color red
</style>
