<template>
  <div>
    <img src="../login/images/timg.jpg" alt width="100%">
    <el-card class="box1-card">
      <div slot="header">
        <h2>注册门店</h2>
      </div>
      <el-form label-width="80px">
        <el-form-item label="店名">
          <el-input v-model="storeName"></el-input>
        </el-form-item>
        <el-form-item label="营业执照">
          <el-input v-model="shopName"></el-input>
        </el-form-item>
        <!-- 营业执照图片 -->
        <el-form-item label="法人">
          <el-input v-model="shopCorporate"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="shopAdd"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="shopTel"></el-input>
        </el-form-item>
        <!-- 封面图片 -->
        <el-form-item label="商店等级">
          <el-input placeholder="1 / 2 / 3" v-model="grade"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="createStore">注册门店</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "StoreReg"
);

export default {
  name: "storeReg",
  data() {
    return {
      storeName: "",
      shopName: "",
      shopCorporate: "",
      shopAdd: "",
      shopTel: "",
      grade: ""
    };
  },
  methods: {
    ...mapActions(["createStoreAsync"]),

    createStore() {
      //创建门店
      let obj = {
        storeName: this.storeName, //店名
        shopName: this.shopName, //营业执照
        //差营业执照图片
        shopCorporate: this.shopCorporate, //法人
        shopAdd: this.shopAdd, //地址
        shopTel: this.shopTel, //电话
        //差头图
        //宠物未关联
        //服务未关联
        grade: this.grade, ////商店等级
        usersId: this.$route.params.usersId //注册时的门店管理员已关联,schema中改为usersId
      };
      this.createStoreAsync(obj); //请求数据创建店铺
      this.$message("注册成功，请登陆");
      this.$router.push({ path: "/login" }); //注册完成后跳转到登陆页面
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
.box-card {
  width: 500px;
  position: absolute;
  top: 50px;
  left: 480px;
}
</style>