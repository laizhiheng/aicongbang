<template>
  <div>
    <el-table :data="rows" border style="width: 100%">
      <el-table-column fixed="left" prop="petsName" label="宠物名称" width="120"></el-table-column>
      <el-table-column prop="petsClass" label="宠物品类"></el-table-column>
      <el-table-column prop="petsType" label="宠物种类"></el-table-column>
      <el-table-column prop="petsDate" label="出生日期" width="120"></el-table-column>
      <el-table-column prop="petsColor" label="宠物颜色"></el-table-column>
      <el-table-column prop="petsGender" label="宠物性别"></el-table-column>
      <el-table-column prop="petsCharacter" label="宠物性格"></el-table-column>
      <el-table-column prop="petsPrice" label="宠物价格"></el-table-column>
      <el-table-column prop="store" label="商家" width="300"></el-table-column>
      <el-table-column prop="petsImg" label="图片" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="210">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="modify(scope.$index,scope.row),dialogFormVisible=true"
            icon="el-icon-edit"
          >修改</el-button>
          <el-button type="primary" @click="lost(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form style="display: flex;justify-content: space-around;">
        <div>
          <el-form-item label="宠物名称：" prop="name">
            <el-input style="width:240px" v-model="petsName" placeholder="请输入：二狗..."></el-input>
          </el-form-item>
          <el-form-item label="宠物品类：" prop="name">
            <el-radio-group v-model="radio4" size="medium">
              <el-radio-button label="喵星人"></el-radio-button>
              <el-radio-button label="汪星人"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="宠物种类：" prop="name">
            <el-input style="width:240px" v-model="petsType" placeholder="请输入：金毛，英短..."></el-input>
          </el-form-item>
          <el-form-item label="宠物颜色：" prop="name">
            <el-input style="width:240px" v-model="petsColor" placeholder="请输入：黑，白..."></el-input>
          </el-form-item>
          <el-form-item label="宠物萌照：" prop="name">
            <el-upload
              class="prod-image"
              action="/learn/upload"
              :show-file-list="false"
              :on-success="handleSuccess"
              :before-upload="beforeUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="cur-image">
              <i v-else class="el-icon-plus prod-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="宠物性别：" prop="name">
            <el-radio-group v-model="radio3" size="medium">
              <el-radio-button label="妹妹"></el-radio-button>
              <el-radio-button label="弟弟"></el-radio-button>
              <el-radio-button label="其他"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="宠物性格：" prop="name">
            <el-input style="width:240px" v-model="petsCharacter" placeholder="请输入：活泼，内向..."></el-input>
          </el-form-item>
          <el-form-item label="宠物价格：" prop="name">
            <el-input style="width:240px" v-model="petsPrice" placeholder="输入数字，单位元"></el-input>
          </el-form-item>
          <el-form-item label="选择商家：">
            <el-select v-model="department" placeholder="请选择" style="width:240px;">
              <el-option
                style="height:50px;"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出身日期：">
            <el-date-picker
              v-model="value1"
              type="datetime"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok(),dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "StoresPetsAddPets"
);
export default {
  name: "app",
  data() {
    return {
      petsName: "",
      id: "",
      imageUrl: "",
      petsType: "",
      radio4: "喵星人",
      radio3: "妹妹",
      petsColor: "",
      petsCharacter: "",
      petsPrice: "",
      petsImg: "",
      value1: "",
      options: [
        {
          value: "0",
          label: "设计部"
        },
        {
          value: "1",
          label: "研发部"
        }
      ],
      department: "",
      dialogFormVisible: false
    };
  },
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getPetsByPageAsync();
  },
  watch: {
    curPage() {
      this.getPetsByPageAsync({ curPage: this.curPage });
    }
  },

  methods: {
    modify(index, row) {
      this._id = row._id;
      this.petsName = row.petsName;
      this.radio4 = row.petsClass;
      this.petsType = row.petsType;
      this.petsColor = row.petsColor;
      this.radio3 = row.petsGender;
      this.petsCharacter = row.petsCharacter;
      this.value1 = row.petsDate;
      this.petsPrice = row.petsPrice;
      this.petsName = row.petsName;
    },
    ...mapActions(["getPetsByPageAsync", "removePetsAsync", "updateByIdAsync"]),
    ...mapMutations(["setCurPage"]),
    lost(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.removePetsAsync({ _id: row._id }),
            this.getPetsByPageAsync({ curPage: this.curPage });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      this.getPetsByPageAsync({ eachPage: val });
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    firstPage() {
      if (this.curPage != 1) {
        this.setCurPage(1);
      }
    },
    firstPage() {
      if (this.curPage != this.maxPage) {
        this.setCurPage(this.maxPage);
      }
    },
    beforeUpload(file) {
      const isPIC = file.type === "image/jpeg" || "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isPIC) {
        this.$message.error("上传图片只能是 JPG或PNG 格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isPIC && isLt5M;
    },
    handleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    ok() {
      console.log(this._id);
      let obj = {
        _id: this._id,
        petsName: this.petsName,
        petsClass: this.radio4,
        petsType: this.petsType,
        petsColor: this.petsColor,
        petsDate: this.value1,
        petsGender: this.radio3,
        petsCharacter: this.petsCharacter,
        petsPrice: this.petsPrice,
        petsImg: this.petsImg
      };
      this.updateByIdAsync(obj);
      this.getPetsByPageAsync();
    }
  }
};
</script>
<style>
.el-dialog {
  width: 50%;
}
.el-form-item {
  margin-bottom: 6px;
}
</style>
