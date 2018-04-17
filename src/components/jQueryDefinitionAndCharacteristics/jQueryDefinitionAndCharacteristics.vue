<template>
    <div class="jQuery-definition-and-characteristics-warp">
        <el-card class="box-card">
            <div slot="header" class="clearfix">定义</div>
            <p>jQuery 是一个 JavaScript 库。</p>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">特点</div>
            <p>链式调用</p>
            <p>读写合一</p>
            <p>jQuery 极大地简化了 JavaScript 编程。</p>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">关于版本</div>
            <p><span>1.X</span>兼容老版本IE,文件比较大</p>
            <p><span>2.X</span>部分IE8及以下不支持，文件更小，执行效率高、</p>
            <p><span>3.X</span>不支持IE8以下版本，提供了新的API,提供不包含ajax/动画API的版本</p>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: {},
        components: {},
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
    .jQuery-definition-and-characteristics-warp
        overflow auto
        width 99%
        max-height 66.8rem
        background: #ddd
        &>.box-card
            margin 2rem
            .clearfix
                font-size 1.8rem
                font-weight bold
            p
                font-size 1.5rem
                line-height 2.3rem

</style>
