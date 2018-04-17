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
                <jQuery-operation-method/>
            </el-tab-pane>
            <el-tab-pane label="事件">
                <jQuery-event/>
            </el-tab-pane>
            <el-tab-pane label="效果">
                <jQuery-effect/>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    //引入jQuery定义及特点组件
    import jQueryDefinitionAndCharacteristics from '../../components/jQueryDefinitionAndCharacteristics/jQueryDefinitionAndCharacteristics'
    //引入jQuery选择器组件
    import jQuerySelector from '../../components/jQuerySelector/jQuerySelector'
    //引入jQuery事件组件
    import jQueryEvent from '../../components/jQueryEvent/jQueryEvent.vue'
    //引入jQuery操作方法组件
    import jQueryOperationMethod from '../../components/jQueryOperationMethod/jQueryOperationMethod'
    //引入jQuery效果动画组件
    import jQueryEffect from '../../components/jQueryEffect/jQueryEffect'
    export default {
        name: "j-query",
        data(){
            return {

            }
        },
        components: {
            "jQuery-definition-and-characteristics": jQueryDefinitionAndCharacteristics,
            "jQuery-selector": jQuerySelector,
            "jQuery-event": jQueryEvent,
            "jQuery-operation-method": jQueryOperationMethod,
            "jQuery-effect": jQueryEffect
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
            font-size 3rem
            line-height 5rem
        &>.el-tabs
            width 99%
            height 90%
            &>.el-tabs__header
                margin-left 1rem
                background: #fff

</style>
