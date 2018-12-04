<template>
  <div>
    <el-table
    :data="rows"
    border
    style="width: 100%">
      <el-table-column property="goodsName" label="名称"></el-table-column>
      <el-table-column property="goodsType" label="品类"></el-table-column>
      <el-table-column property="goodsTaste" label="口味"></el-table-column>
      <el-table-column property="goodsSize" label="包装规格"></el-table-column>
      <el-table-column property="goodsRegion" label="产地"></el-table-column>
      <el-table-column property="goodsDate" label="出厂日期"></el-table-column>
      <el-table-column property="goodsTime" label="保质期"></el-table-column>
      <el-table-column property="goodsPrice" label="价格"></el-table-column>
      <el-table-column property="goodsImg" label="图片">
        <template slot-scope="scope">
          <el-popover placement="left" width="300px" trigger="hover">
            <img height="50px" slot="reference"
            :src="`http://localhost:3000`+scope.row.goodsUrl" alt="alt">
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column property="store" label="所属商店"></el-table-column>
      <el-table-column property="name" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="commdityUpdata(scope.row)">修改</el-button>
          <el-dialog title="商品修改" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <div>
                <div style="display:flex">
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
                      <el-input
                        v-model="form.goodsMaterial"
                        style="width:200px;"
                        placeholder="请输入商品制作材料"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="适用规格">
                      <el-input
                        v-model="form.goodsCanFo"
                        style="width:200px;"
                        placeholder="请输入商品适用规格"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="专属规格">
                      <el-input
                        v-model="form.goodsOnlyFor"
                        style="width:200px;"
                        placeholder="请输入商品专属规格"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="包装规格">
                      <el-input
                        v-model="form.goodsSize"
                        style="width:200px;"
                        placeholder="请输入商品包装规格"
                      ></el-input>
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
                    </el-form-item>-->
                  </el-form>
                  <el-form ref="form" :model="form" label-width="200px">
                    <el-form-item label="口味">
                      <el-input
                        v-model="form.goodsTaste"
                        style="width:200px;"
                        placeholder="请输入商品口味"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="特殊功用">
                      <el-input
                        v-model="form.goodsSpecial"
                        style="width:200px;"
                        placeholder="请输入商品的特殊功能"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="产地">
                      <el-input
                        v-model="form.goodsRegion"
                        style="width:200px;"
                        placeholder="请输入商品产地"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="出厂日期">
                      <el-input
                        v-model="form.goodsDate"
                        style="width:200px;"
                        placeholder="请输入商品出厂日期"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="保质期">
                      <el-input
                        v-model="form.goodsTime"
                        style="width:200px;"
                        placeholder="请输入商品保质期"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="供应商">
                      <el-input
                        v-model="form.goodsSupplier"
                        style="width:200px;"
                        placeholder="请输入商品供应商"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                      <el-input
                        v-model="form.goodsPrice"
                        style="width:200px;"
                        placeholder="请输入商品价格"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="onUpdata">确 定</el-button>
            </div>
          </el-dialog>
          <el-button
            type="primary"
            icon="el-icon-delete"
            style="margin-left:"
            @click="removeCommdity(scope.row._id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="5"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      ></el-pagination>
    </div>
  </div>

</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "Commdity"
);
export default {
  name: "commdityList",

  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        goodsName: "",
        goodsType: "",
        goodsMaterial: "",
        goodsCanFo: "",
        goodsOnlyFor: "",
        goodsSize: "",
        goodsTaste: "",
        goodsSpecial: "",
        goodsRegion: "",
        goodsDate: "",
        goodsTime: "",
        goodsSupplier: "",
        goodsPrice: "",
        region: ""
      }
      // formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getCommdityPageAsync();
  },
  watch: {
    curPage() {
      this.getCommdityPageAsync({ curPage: this.curPage });
    }
  },
  methods: {
    ...mapActions([
      "getCommdityPageAsync",
      "commdityUpdataAsync",
      "removeCommdityAsync"
    ]),
    onUpdata() {
      let obj = {
        _id: this._id,
        goodsName: this.form.goodsName,
        goodsType: this.form.goodsType,
        goodsMaterial: this.form.goodsMaterial,
        goodsCanFo: this.form.goodsCanFo,
        goodsOnlyFor: this.form.goodsOnlyFor,
        goodsSize: this.form.goodsSize,
        goodsTaste: this.form.goodsTaste,
        goodsSpecial: this.form.goodsSpecial,
        goodsRegion: this.form.goodsRegion,
        goodsDate: this.form.goodsDate,
        goodsTime: this.form.goodsTime,
        goodsSupplier: this.form.goodsSupplier,
        goodsPrice: this.form.goodsPrice,
        region: ""
      };
      this.commdityUpdataAsync(obj);
      this.$confirm("确定是否更改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "更改成功!"
          });
          this.getCommdityPageAsync();
          this.dialogFormVisible = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消更改"
          });
        });
    },

    commdityUpdata(row) {
      this.dialogFormVisible = true;
      this._id = row._id;
      this.form.goodsName = row.goodsName;
      this.form.goodsType = row.goodsType;
      this.form.goodsMaterial = row.goodsMaterial;
      this.form.goodsCanFo = row.goodsCanFo;
      this.form.goodsOnlyFor = row.goodsOnlyFor;
      this.form.goodsSize = row.goodsSize;
      this.form.goodsTaste = row.goodsTaste;
      this.form.goodsSpecial = row.goodsSpecial;
      this.form.goodsRegion = row.goodsRegion;
      this.form.goodsDate = row.goodsDate;
      this.form.goodsTime = row.goodsTime;
      this.form.goodsSupplier = row.goodsSupplier;
      this.form.goodsPrice = row.goodsPrice;
      this.form.region = row.region;
    },
    removeCommdity(ID) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(1);
          this.removeCommdityAsync(ID);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getCommdityPageAsync();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // handleCurrentChange(val) {
    //   this.currentRow = val;
    // },
    handleSizeChange(val) {
      this.getCommdityPageAsync({ eachPage: val });
    },
    handleCurrentChange(val) {
      this.getCommdityPageAsync({ curPage: val });
    }
    // setCurrent(row) {
    //   this.$refs.singleTable.setCurrentRow(row);
    // },
    // handleCurrentChange(val) {
    //   this.setCurPage(val);
    // },
    // ...mapMutations(["setCurPage"]),
    // firstPage() {
    //   if (this.curPage != 1) {
    //     this.setCurPage(1);
    //   }
    // },
    // lastPage() {
    //   if (this.curPage != this.maxPage) {
    //     this.setCurPage(this.maxPage);
    //   }
    // }
  }
};
</script>

<style>
.el-dialog {
  width: 80%;
}
</style>

