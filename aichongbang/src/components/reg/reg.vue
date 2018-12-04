<template>
  <div>
    <img src="../login/images/timg.jpg" alt width="100%">

    <el-card class="box1-card">
      <div slot="header">
        <h2>注册</h2>
      </div>
      <el-form label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userPhone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userMail"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="trueName"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userAdd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="storeReg">注册门店</el-button>
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
.box1-card {
  width: 500px;
  position: absolute;
  top: 50px;
  left: 480px;
}
</style>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("Reg");

export default {
  name: "reg",
  data() {
    return {
      username: "",
      password: "",
      userPhone: "",
      userMail: "",
      trueName: "",
      userAdd: ""
    };
  },
  computed: {
    ...mapState(["usersId"])

  },
  methods: {
    ...mapActions(["createUser"]),
    async storeReg() {
      let obj = {
        username: this.username, //账号
        password: this.password, //密码
        userPhone: this.userPhone, //用户电话
        userMail: this.userMail, //用户邮箱
        trueName: this.trueName, //用户姓名(原schema中与账号重复，改为trueName)
        //userType：注册的店主用户类型都为1，平台管理员自己添加一条userType为0的数据
        //state：用户初始状态为0
        userAdd: this.userAdd //地址
        // 商店未关联
      };
      await this.createUser(obj); //请求数据创建店主并返回Id传给了店铺
      this.$router.push({
        name: "_storeReg",
        params: { usersId: this.usersId }
      });
      
    }
  }
};
</script>
