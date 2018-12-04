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
        <el-upload
          class="upload-demo"
          action="/users/addImgs"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传营业执照照片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <!-- end -->
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
          <el-upload
          class="upload-demo"
          action="/users/addImgs"
          :on-success="handleAvatarSuccessShopImg"
          :before-upload="beforeAvatarUploadShopImg"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传封面图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <!-- end -->
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
      grade: "",
      shopLIcenceImg: "",
      shopImg:"",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.shopLIcenceImg = res._id;
    },
    handleAvatarSuccessShopImg(res, file) {
      this.shopImg = res._id;
    },
    beforeAvatarUpload(file) {
      // console.log(file)
      // const isJPG = file.type === 'image/jpeg'
      const isLt5M = file.size / 1024 / 1024 < 5;
      // if (!isJPG) {
      //   Message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt5M) {
        Message({
          type: "warning",
          message: "上传头像图片大小不能超过 5MB!",
          showClose: true
        });
      }
      return isLt5M;
    },
    beforeAvatarUploadShopImg(file) {
      // console.log(file)
      // const isJPG = file.type === 'image/jpeg'
      const isLt5M = file.size / 1024 / 1024 < 5;
      // if (!isJPG) {
      //   Message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt5M) {
        Message({
          type: "warning",
          message: "上传头像图片大小不能超过 5MB!",
          showClose: true
        });
      }
      return isLt5M;
    },
    ...mapActions(["createStoreAsync"]),

    createStore() {
      //创建门店
      let obj = {
        storeName: this.storeName, //店名
        shopName: this.shopName, //营业执照
        shopLIcenceImg: this.shopLIcenceImg,//营业执照图片
        shopCorporate: this.shopCorporate, //法人
        shopAdd: this.shopAdd, //地址
        shopTel: this.shopTel, //电话
        shopImg: this.shopImg, //封面
        //宠物未关联
        //服务未关联
        grade: this.grade, ////商店等级
        usersId: this.$route.params.usersId //注册时的门店管理员已关联,schema中改为usersId
      };
      this.createStoreAsync(obj); //请求数据创建店铺
      this.$message("注册成功，请登陆");
      this.$router.push({ path: "/" }); //注册完成后跳转到登陆页面
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