<template>
<el-container>
  <el-header style="height: 60px;">
    <Header></Header>
  </el-header>
  <el-container>
    <el-aside>
      <MenuLeft></MenuLeft>
    </el-aside>
    <el-container>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer style="height: 35px;">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
import Header from './components/Header.vue'
import MenuLeft from './components/MenuLeft.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    MenuLeft,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: #FFF;
  color: #333;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
}
.el-footer{
  color: #333;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  text-align: center;
}
</style>
