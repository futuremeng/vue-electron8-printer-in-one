<!--
Date: 2020-08-07 08:39:00
LastEditors: Future Meng
LastEditTime: 2020-08-07 15:09:23
-->
<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-vepio" mode="horizontal" router>
          <el-menu-item index="account">帐户</el-menu-item>
          <el-menu-item index="printers">打印机</el-menu-item>
          <el-menu-item index="jobs">打印任务</el-menu-item>
          <el-menu-item index="settings">服务配置</el-menu-item>
          <el-menu-item index="logs">日志</el-menu-item>
          <el-menu-item index="docs">
            <a href="http://futuremeng.com" target="_blank">文档</a>
          </el-menu-item>
          <el-menu-item index="about">
            <a href="http://futuremeng.com" target="_blank">关于我们</a>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "account",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
