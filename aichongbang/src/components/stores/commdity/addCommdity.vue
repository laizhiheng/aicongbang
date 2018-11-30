<template>

  <div>
    <h1 style="display:flex;justify-content:center;">商品新增</h1>
    <div style="margin-top:40px;display:flex">
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="所属商店">
          <el-select v-model="form.region" placeholder="请选所属商店"></el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.goodsName" style="width:200px;" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="品类">
          <el-input v-model="form.goodsType" style="width:200px;" placeholder="请输入商品品类"></el-input>
        </el-form-item>
        <el-form-item label="材质或制作方法">
          <el-input v-model="form.goodsMaterial" style="width:200px;" placeholder="请输入商品制作材料"></el-input>
        </el-form-item>
        <el-form-item label="适用规格">
          <el-input v-model="form.goodsCanFo" style="width:200px;" placeholder="请输入商品适用规格"></el-input>
        </el-form-item>
        <el-form-item label="专属规格">
          <el-input v-model="form.goodsOnlyFor" style="width:200px;" placeholder="请输入商品专属规格"></el-input>
        </el-form-item>
        <el-form-item label="包装规格">
          <el-input v-model="form.goodsSize" style="width:200px;" placeholder="请输入商品包装规格"></el-input>
        </el-form-item>
        <!-- <el-form-item label="图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item> -->
      </el-form>
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="口味">
          <el-input v-model="form.goodsTaste" style="width:200px;" placeholder="请输入商品口味"></el-input>
        </el-form-item>
        <el-form-item label="特殊功用">
          <el-input v-model="form.goodsSpecial" style="width:200px;" placeholder="请输入商品的特殊功能"></el-input>
        </el-form-item>
        <el-form-item label="产地">
          <el-input v-model="form.goodsRegion" style="width:200px;" placeholder="请输入商品产地"></el-input>
        </el-form-item>
        <el-form-item label="出厂日期">
          <el-input v-model="form.goodsDate" style="width:200px;" placeholder="请输入商品出厂日期"></el-input>
        </el-form-item>
        <el-form-item label="保质期">
          <el-input v-model="form.goodsTime" style="width:200px;" placeholder="请输入商品保质期"></el-input>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.goodsSupplier" style="width:200px;" placeholder="请输入商品供应商"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.goodsPrice" style="width:200px;" placeholder="请输入商品价格"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="width:200px;margin:0 auto">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "Commdity"
);
export default {
  data() {
    return {
      form: {
        goodsName: "",
        goodsType:"",
        goodsMaterial: "",
        goodsCanFo:"",
        goodsOnlyFor: "",
        goodsSize:"",
        goodsTaste: "",
        goodsSpecial:"",
        goodsRegion: "",
        goodsDate:"",
        goodsTime: "",
        goodsSupplier:"",
        goodsPrice:"",
        region: "",
      }
      // form: {
      //   name: "",
      //   region: "",
      //   delivery: false,
      //   type: [],
      //   resource: "",
      //   desc: ""
      // }
    };
  },
  methods: {
    ...mapActions(["addCommdity"]),
    onSubmit() {
      let obj = {
        goodsName: this.form.goodsName,
        goodsType:this.form.goodsType,
        goodsMaterial: this.form.goodsMaterial,
        goodsCanFo:this.form.goodsCanFo,
        goodsOnlyFor: this.form.goodsOnlyFor,
        goodsSize:this.form.goodsSize,
        goodsTaste: this.form.goodsTaste,
        goodsSpecial:this.form.goodsSpecial,
        goodsRegion: this.form.goodsRegion,
        goodsDate:this.form.goodsDate,
        goodsTime: this.form.goodsTime,
        goodsSupplier:this.form.goodsSupplier,
        goodsPrice:this.form.goodsPrice,
        region: this.form.region,
      }
      this.addCommdity(obj)
    },
    
  }
};
</script>

<style>
</style>