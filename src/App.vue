<template>
    <div id="fd-warp" >
        <fd-header v-show="$route.meta.showFooter"/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
    import header from './components/Header/Header.vue'
        export default {
            components: {
                'fd-header': header
            },
            mounted(){

            }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    html,body
        width 100%
        height 100%
        min-width 1366px
        min-height 768px
    #fd-warp
        width 100%
        height: 100%
        min-height 100%
    main
        box-sizing border-box
        height 100%
        min-height 100%
        padding-top 6rem
        background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
</style>
