<template>
    <el-tabs type="border-card" v-if="jQuerySelectorData.success">
        <el-tab-pane label="基本">
            <jQuerySelectorTable :data="jQuerySelectorData.basicData"/>
        </el-tab-pane>
        <el-tab-pane label="层次">
            <jQuerySelectorTable :data="jQuerySelectorData.hierarchyData"/>
        </el-tab-pane>
        <el-tab-pane label="表单">
            <jQuerySelectorTable :data="jQuerySelectorData.formData"/>
        </el-tab-pane>
        <el-tab-pane label="属性">
            <jQuerySelectorTable :data="jQuerySelectorData.attributeData"/>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import {mapState} from 'vuex'
    import jQuerySelectorTable from '../jQuerySelectorTable/jQuerySelectorTable'
    export default {
        data() {
            return {

            }
        },
        props: {},
        components: {
            jQuerySelectorTable
        },
        created() {
            this.$store.dispatch('getJQuerySelectorData')
        },
        mounted() {

        },
        computed: {
             ...mapState(['jQuerySelectorData'])
        },
        watch: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    /*.el-table*/
    /*height 280px*/
</style>
