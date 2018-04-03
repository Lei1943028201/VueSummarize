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
        <template slot="title">前端UI库</template>
        <el-menu-item index="elementUI">element-ui</el-menu-item>
        <el-menu-item index="elementUI2">质检规则匹配</el-menu-item>
        <el-submenu index="1-3">
          <template slot="title">数据比对报告</template>
          <el-menu-item index="1-3-1">动态报告</el-menu-item>
          <el-menu-item index="1-3-2">交叉验证</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">数据质检报告</template>
          <el-menu-item index="1-4-1">案件质量报告</el-menu-item>
          <el-menu-item index="1-4-2">文书质量报告</el-menu-item>
          <el-menu-item index="1-4-3">卷宗档案质量报告</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <template slot="title">数据汇聚监控</template>
          <el-menu-item index="1-5-1">15法标上报监控</el-menu-item>
          <el-menu-item index="1-5-2">电子卷宗上报监控</el-menu-item>
          <el-menu-item index="1-5-3">原审卷宗汇聚统计</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">共享交换</template>
        <el-menu-item index="2-1">共享交换目录</el-menu-item>
        <el-menu-item index="2-2">共享交换监控</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">数据服务</template>
        <el-submenu index="3-1">
          <template slot="title">统计分析服务</template>
          <el-menu-item index="3-1-1">法院名录</el-menu-item>
          <el-menu-item index="3-1-2">司法人事统计</el-menu-item>
          <el-menu-item index="3-1-3">干警业绩档案</el-menu-item>
          <el-menu-item index="3-1-4">收结存统计</el-menu-item>
          <el-menu-item index="3-1-5">审判态势分析</el-menu-item>
          <el-menu-item index="3-1-6">新审判态势</el-menu-item>
          <el-menu-item index="3-1-7">审判质效统计</el-menu-item>
        </el-submenu>
        <el-menu-item index="3-2">司法统计服务</el-menu-item>
        <el-menu-item index="3-3">卷宗查阅服务</el-menu-item>
        <el-menu-item index="3-4">专题分析服务</el-menu-item>
        <el-menu-item index="3-5">法制搜索</el-menu-item>
        <el-submenu index="3-6">
          <template slot="title">司法智能服务</template>
          <el-menu-item index="3-6-1">相似案例检查</el-menu-item>
          <el-menu-item index="3-6-2">量刑参考</el-menu-item>
          <el-menu-item index="3-6-3">适用法条分析</el-menu-item>
        </el-submenu>
        <el-menu-item index="3-7">分平台服务</el-menu-item>
        <el-menu-item index="3-8">法制罗盘</el-menu-item>
        <el-menu-item index="3-9">智慧法院评价</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">平台管理</template>
        <el-menu-item index="4-1">用户权限管理</el-menu-item>
        <el-menu-item index="4-2">服务运行监控</el-menu-item>
        <el-submenu index="4-3">
          <template slot="title">系统参数配置</template>
          <el-menu-item index="4-3-1">服务运行参数</el-menu-item>
          <el-menu-item index="4-3-2">备份归档测策略</el-menu-item>
        </el-submenu>
        <el-submenu index="4-4">
          <template slot="title">运维管理</template>
          <el-menu-item index="4-4-1">基础设施管理</el-menu-item>
          <el-menu-item index="4-4-2">日志分析</el-menu-item>
          <el-menu-item index="4-4-3">故障报备</el-menu-item>
        </el-submenu>
        <el-menu-item index="4-5">信息发布</el-menu-item>
        <el-menu-item index="4-6">问题反馈</el-menu-item>
        <el-menu-item index="4-7">问卷管理</el-menu-item>
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
