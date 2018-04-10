<template>
    <div id="el-menu-warp">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            router
            @select="handleSelect"
            :unique-opened = "true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <h1>前端知识查询库</h1>
            <el-submenu index="1" disabled>
                <template slot="title">前端知识</template>
                <el-submenu index="1-1">
                    <template slot="title">前端基础</template>
                    <el-menu-item index="html">HTML</el-menu-item>
                    <el-menu-item index="css">CSS</el-menu-item>
                    <el-menu-item index="javaScript">JavaScript</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2" disabled>
                <template slot="title">前端框架</template>
                <el-menu-item index="vue">Vue</el-menu-item>
                <el-menu-item index="react">React</el-menu-item>
                <el-menu-item index="angular">Angular</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">函数库</template>
                <el-menu-item index="jQuery">jQuery</el-menu-item>
                <el-menu-item index="zepto">Zepto</el-menu-item>
            </el-submenu>

            <el-submenu index="4" disabled>
                <template slot="title">项目构建工具</template>
                <el-menu-item index="gulp">Gulp</el-menu-item>
                <el-menu-item index="grunt">Grunt</el-menu-item>
                <el-menu-item index="webpack">Webpack</el-menu-item>
            </el-submenu>

            <el-submenu index="5" disabled>
                <template slot="title">开发工具</template>
                <el-menu-item index="webStorm">WebStorm</el-menu-item>
                <el-menu-item index="chrome">Chrome插件</el-menu-item>
                <el-menu-item index="wxTool">微信小程序开发工具</el-menu-item>
                <el-menu-item index="koala">Koala</el-menu-item>
                <el-menu-item index="git">Git</el-menu-item>
                <el-menu-item index="svn">Svn</el-menu-item>
                <el-menu-item index="markdown">Markdown</el-menu-item>
            </el-submenu>

            <el-submenu index="6" disabled>
                <template slot="title">模块化</template>
                <el-menu-item index="amd">AMD</el-menu-item>
                <el-menu-item index="cmd">CMD</el-menu-item>
                <el-menu-item index="commonJS">CommonJS</el-menu-item>
            </el-submenu>
            <el-submenu index="7" disabled>
                <template slot="title">数据库</template>
                <el-menu-item index="mongodb">Mongodb</el-menu-item>
                <el-menu-item index="mySQL">MySQL</el-menu-item>
                <el-menu-item index="oracle">Oracle</el-menu-item>
                <el-menu-item index="sql Server">SQL Server</el-menu-item>
                <el-menu-item index="sybase">Sybase</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #el-menu-warp
        position fixed
        top 0
        width 100%
        min-width 1366px
    .el-menu--horizontal>h1
        margin-right 30px
        float right
        font-size 30px
        color #fff
        line-height 61px
</style>
