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

</style>
