<template>
<div>
<!--  v-model:rules=:rules-->
  <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
    <h3 class="login-title">系统登录</h3>

    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入你的用户名"></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>

    <el-checkbox class="loginRemember" v-model="checked"></el-checkbox>

    <el-button type="primary" style="width:100%;" @click="submitLogin">登录</el-button>
  </el-form>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      loginForm:{
        username:'admin',
        password:'123'
      },
      checked: true,
      rules:{
        username:[{required: true, message:"请输入你的用户名",trigger:"blur"}],
        password:[{required: true, message:"请输入密码",trigger:"blur"}]
      }
    }
  },
  methods:{
    submitLogin(){
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('提交成功!');
        } else {
          this.$message.error('请输入所有字段');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width:350px;
  padding:35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-title{
  margin:10px auto 20px auto;
  text-align:center;
  color: #000000;
}
.loginRemember{
  text-align:left;
  margin:0 0 15px 0;
}

</style>