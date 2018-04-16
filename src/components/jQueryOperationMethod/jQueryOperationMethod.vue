<template>
    <el-tabs type="border-card" v-if="jQueryOperationMethodData.success">
        <el-tab-pane label="文档操作">
            <jQuery-selector-table :data="jQueryOperationMethodData.documentOperationData"/>
        </el-tab-pane>
        <el-tab-pane label="属性操作">
            <jQuery-selector-table :data="jQueryOperationMethodData.attributeOperationData"/>
        </el-tab-pane>
        <el-tab-pane label="CSS操作">
            <jQuery-selector-table :data="jQueryOperationMethodData.cssOperationData"/>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import {mapState} from 'vuex'
    import jQuerySelectorTable from '../jQuerySelectorTable/jQuerySelectorTable'
    export default {
        data(){
            return {}
        },
        props: {},
        components: {
            'jQuery-selector-table': jQuerySelectorTable
        },
        created(){
            this.$store.dispatch('getJQueryOperationMethodData')
        },
        mounted(){
        },
        computed: {
            ...mapState(['jQueryOperationMethodData'])
        },
        watch: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>