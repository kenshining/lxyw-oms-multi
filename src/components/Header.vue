<template>
	<div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span class="user-login-pin" style="cursor: pointer;">王小虎</span><i class="el-icon-setting el-icon-right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="修改密码"><el-badge :value="200" :max="9" class="item">
      修改密码</el-badge></el-dropdown-item>
          <el-dropdown-item command="修改资料">修改资料</el-dropdown-item>
          <el-dropdown-item command="消息配置" divided>消息配置</el-dropdown-item>
          <el-dropdown-item command="系统配置">系统配置</el-dropdown-item>
          <el-dropdown-item command="退出" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    loginState: String,
    loginUser: String
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  }
}

</script>
<style scoped>
  .el-aside {
    color: #333;
  }
  .user-login-pin{

    width: 15%;
    min-width: 100px;
    text-align: right;
    padding-right: 5px;

  }
</style>