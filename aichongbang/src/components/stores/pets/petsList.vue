<template>
  <div>
    <el-table :data="rows" border style="width: 100%">
      <el-table-column fixed="left" prop="petsName" label="宠物名称" width="120"></el-table-column>
      <el-table-column prop="petsClass" label="宠物品类" width="120"></el-table-column>
      <el-table-column prop="petsType" label="宠物种类" width="120"></el-table-column>
      <el-table-column prop="petsDate" label="出生日期" width="120"></el-table-column>
      <el-table-column prop="petsColor" label="宠物颜色" width="120"></el-table-column>
      <el-table-column prop="petsGender" label="宠物性别" width="120"></el-table-column>
      <el-table-column prop="petsCharacter" label="宠物性格" width="120"></el-table-column>
      <el-table-column prop="petsPrice" label="宠物价格" width="120"></el-table-column>
      <el-table-column prop="store" label="所属商店" width="300"></el-table-column>
      <el-table-column  prop="petsImg" label="图片" width="120">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="modify(scope.$index,scope.row),ck=true"
          >查看图片</el-button>
        </template>
      </el-table-column>
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
     <el-dialog title="修改信息" :data="rows" :visible.sync="ck">
          <p prop="petsImg">"{{petsImg}}"</p>
       </el-dialog>
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
              class="upload-demo"
              action="/pets/addImgs"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
          <el-form-item label="所属商店">
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
      dialogFormVisible: false,
      ck:false
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
    },
    handleAvatarSuccess(res, file) {
      this.petsImg = res._id;
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
