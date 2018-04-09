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
          <el-menu-item index="1-1-1">HTML</el-menu-item>
          <el-menu-item index="1-1-2">CSS</el-menu-item>
          <el-menu-item index="1-1-3">JS</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2" disabled>
        <template slot="title">前端框架</template>
        <el-menu-item index="2-1">Vue</el-menu-item>
        <el-menu-item index="2-2">React</el-menu-item>
        <el-menu-item index="2-3">Angular</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">函数库</template>
        <el-menu-item index="3-1">jQuery</el-menu-item>
        <el-menu-item index="3-2">Zepto</el-menu-item>
      </el-submenu>

      <el-submenu index="4" disabled>
        <template slot="title">项目构建工具</template>
        <el-menu-item index="4-1">Gulp</el-menu-item>
        <el-menu-item index="4-2">Grunt</el-menu-item>
        <el-menu-item index="4-3">Webpack</el-menu-item>
      </el-submenu>

      <el-submenu index="5" disabled>
        <template slot="title">开发工具</template>
        <el-menu-item index="5-1">Webtorm</el-menu-item>
        <el-menu-item index="5-2">Chrome插件</el-menu-item>
        <el-menu-item index="5-3">微信小程序开发工具</el-menu-item>
        <el-menu-item index="5-4">Koala</el-menu-item>
        <el-menu-item index="5-5">Git</el-menu-item>
        <el-menu-item index="5-6">Svn</el-menu-item>
        <el-menu-item index="5-7">MarkDown</el-menu-item>
      </el-submenu>

      <el-submenu index="6" disabled>
        <template slot="title">模块化</template>
        <el-menu-item index="6-1">AMD</el-menu-item>
        <el-menu-item index="6-2">CMD</el-menu-item>
        <el-menu-item index="6-3">CommonJS</el-menu-item>
      </el-submenu>
      <el-submenu index="7" disabled>
        <template slot="title">数据库</template>
        <el-menu-item index="7-1">Mongodb</el-menu-item>
        <el-menu-item index="7-1">MySQL</el-menu-item>
        <el-menu-item index="7-1">Oracle</el-menu-item>
        <el-menu-item index="7-1">SQL Server</el-menu-item>
        <el-menu-item index="7-1">Sybase</el-menu-item>
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
    .el-menu--horizontal>h1
      margin-right 30px
      float right
      font-size 30px
      color #fff
      line-height 61px
</style>
