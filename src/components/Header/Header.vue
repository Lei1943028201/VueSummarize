<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">前端知识</template>
        <el-submenu index="1-1">
          <template slot="title">前端基础</template>
          <el-menu-item index="1-1-1">HTML</el-menu-item>
          <el-menu-item index="1-1-2">CSS</el-menu-item>
          <el-menu-item index="1-1-3">JS</el-menu-item>
        </el-submenu>
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

</style>
