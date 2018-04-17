<template>
    <div id="ajax-warp">
        <h2>AJAX参考资料</h2>
        <el-tabs tab-position="left">
            <el-tab-pane label="简介">
                简介
            </el-tab-pane>
            <el-tab-pane label="原生AJAX">
                原生AJAX
            </el-tab-pane>
            <el-tab-pane label="jQuery-AJAX">
                jQuery-AJAX
            </el-tab-pane>
            <el-tab-pane label="axios">
                axios
            </el-tab-pane>
            <el-tab-pane label="响应状态码">
                <ajax-response-state-code/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import AJAXResponseStateCode from '../../components/AJAXResponseStateCode/AJAXResponseStateCode.vue'
    export default {
        data(){
            return {}
        },
        props: {},
        components: {
            "ajax-response-state-code": AJAXResponseStateCode
        },
        created(){
        },
        mounted(){
        },
        computed: {},
        watch: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #ajax-warp
        margin 0 auto
        width: 70%
        height 100%
        background: #eee
        &>h2
            text-align center
            font-size 3rem
            line-height 5rem
        &>.el-tabs
            width 99%
            height 90%
            &>.el-tabs__header
                margin-left 10px
                background: #fff
            &>.el-tabs__content
                overflow auto
                height 100%
</style>