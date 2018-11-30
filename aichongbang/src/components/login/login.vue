<template>
  <div>
    <img src="../../../../images/timg.jpg" alt="" width="100%">
    
    <el-card class="box-card">
      <div slot="header">
        <h2>登陆</h2>
      </div>
      <el-form label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :plain="true" @click="info">登陆</el-button>
          <el-button @click="reg">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
}
.box-card {
  width: 500px;
  position: absolute;
  top: 80px;
  left: 480px;
}

</style>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("Login"); //"Login"为store中的命名，就是Login的store
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  name: "login",
  computed: {
    ...mapState(["loginState"])
  },
  methods: {
    ...mapActions(["getManageAsync"]),
    async info() {
      let obj = { username: this.username, password: this.password };
      await this.getManageAsync(obj); //发送请求，获取登陆账号是否正确
      if (this.loginState) {
        //判断账号是否正确，正确则跳转
        this.$message("登陆成功");
        this.$router.push({ path: "/info" });
      } else {
        this.$message("用户名或密码错误，请重新登陆");
      }
    },
    reg() {
      //跳转到注册页面
      this.$router.push({ path: "/reg" });
    }
  }
};
</script>
