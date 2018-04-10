<template>
  <div id="jQuery-warp">
    <ul class="fd-nav">
      <li><a href="#1">定义及特点</a></li>
      <li><a href="#2">选择器</a></li>
      <li><a href="#3">操作方法</a></li>
      <li><a href="#4">事件</a></li>
      <li><a href="#5">效果</a></li>
    </ul>
    <h2>jQuery参考资料</h2>
    <h3><a name="1">定义及特点</a></h3>
    <h3><a name="2">选择器</a></h3>
    <h3><a name="3">操作方法</a></h3>
    <h3><a name="4">事件</a></h3>
    <h3><a name="5">效果</a></h3>
  </div>
</template>

<script>
  import FdNav from '../../components/FdNav/FdNav.vue'
  export default {
      name: "j-query",

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #jQuery-warp
    margin 0 auto
    width: 70%
    min-height: 100%
    background: #ddd
    .fd-nav
      position fixed
      right 80px
      top 300px
      background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
    h2
      text-align center
      font-size 30px
      line-height 50px
    h3
      font-size 20px
      line-height 40px




</style>
