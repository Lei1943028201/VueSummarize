<template>
    <div id="jQuery-warp">
        <h2>jQuery参考资料</h2>
        <el-tabs tab-position="left">
            <el-tab-pane label="定义及特点">
                <jQuery-definition-and-characteristics/>
            </el-tab-pane>
            <el-tab-pane label="选择器">
                <jQuery-selector/>
            </el-tab-pane>
            <el-tab-pane label="操作方法">
                操作方法
            </el-tab-pane>
            <el-tab-pane label="事件">
                事件
            </el-tab-pane>
            <el-tab-pane label="效果">
                效果
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    import jQueryDefinitionAndCharacteristics from '../../components/jQueryDefinitionAndCharacteristics/jQueryDefinitionAndCharacteristics'
    import jQuerySelector from '../../components/jQuerySelector/jQuerySelector'
    export default {
        name: "j-query",
        data(){
            return {

            }
        },
        components: {
            "jQuery-definition-and-characteristics": jQueryDefinitionAndCharacteristics,
            "jQuery-selector": jQuerySelector
        },
        methods: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #jQuery-warp
        margin 0 auto
        width: 70%
        height 100%
        background: #eee
        &>h2
            text-align center
            font-size 30px
            line-height 50px
        &>.el-tabs
            width 99%
            &>.el-tabs__header
                margin-left 10px
                background: #fff

</style>
