<template>
  <div>
    <el-form :model="form" :rules="rules" ref="refForm" class="login-form">
      <h3 class="login-h3">欢迎登陆</h3>
      <el-form-item label="用户名" prop="username"> 
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.number="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item class="login-submit">
        <el-button type="primary" @click="submit('refForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: "请输入账号"}
                ],
                password: [
                    { required: true, trigger: 'blur', message: "请输入密码" },
                    { type: "number", message: "密码必须是数字"}
                ] 
            }
        }
    },
    methods: {
        submit(refForm) {
            this.$refs[refForm].validate( (vali) => {
                if (vali) {
                    console.log(this.form);
                    if (this.form.username.trim() == 'customer') {
                        this.$router.push('/customer');
                    } else if (this.form.username.trim() == 'subs') {
                        this.$router.push('/subscriber');
                    }
                    
                } else {
                    return false;
                }
            })
        }
    }
}
</script>

<style scoped lang='less'>
    .login-form {
        width: 500px;
        margin: 250px auto;
        border: 1px solid #dcdfe6;
        padding: 50px;
    }
    .login-h3 {
        text-align: center;
    }
    .login-submit {
        text-align: center;
    }
</style>>

