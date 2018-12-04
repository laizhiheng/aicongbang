<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="门店名称" prop="storeName">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="营业执照号码" prop="shopName">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="门店法人" prop="shopCorporate">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="门店地址" prop="shopAdd">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="门店电话" prop="shopTel">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即新增</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        storeName: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        storeName: [
          { required: true, message: "请输入商店名称", trigger: "blur" },
          { min: 1,max:10, message: "长度在 1 个字符以上", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>