<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>我的服务</span>
        <el-input v-model="content" style="float:right;width:220px" @keyup.native.enter="serchList" type="text" placeholder="请输入搜索内容"/>
      </div>
      <el-table
        :data="rows"
        style="width: 100%"
      >
        <el-table-column
          width="230"
          prop="_id"
          label="服务编号"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="serveName"
          label="宠物名称"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="serveType"
          label="服务类型"
        ></el-table-column>
        <el-table-column
          width="160"
          prop="serveSchedule"
          label="服务时间"
        ></el-table-column>
        <el-table-column
          width="130"
          prop="serveCanFor"
          label="宠物规格"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="serveDetial"
          label="服务规格"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="serveTime"
          label="耗时"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="serveLevel"
          label="服务员等级"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="servePrice"
          label="价格/元"
        ></el-table-column>
        <el-table-column
          width="100"
          prop="storeId"
          label="所属门店"
        ></el-table-column>
        <el-table-column
          width="220"
          fixed="right"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              @click="update(scope.row)"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <!-- 删除 -->
            <el-button
              @click="Delete(scope.row)"
              type="danger"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹出表单 -->
      <el-dialog
        title="修改信息"
        :visible.sync="dialogFormVisible"
      >
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          :rules="rules"
        >
          <el-form-item
            label="宠物名称"
            prop="serveName"
          >
            <el-input
              v-model="form.serveName"
              :style="{width:'35%'}"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="服务类型"
            prop="serveType"
          >
            <el-select
              v-model="form.serveType"
              placeholder="请选择服务类型"
            >
              <el-option
                label="SPA"
                value="spa"
              ></el-option>
              <el-option
                label="洗澡除菌"
                value="shower"
              ></el-option>
              <el-option
                label="宠物医疗"
                value="hospital"
              ></el-option>
              <el-option
                label="游乐园"
                value="play"
              ></el-option>
              <el-option
                label="其他"
                value="other"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="服务时间"
            prop="serveSchedule"
          >
            <el-date-picker
              v-model="form.serveSchedule"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="宠物规格"
            prop="serveCanFor"
          >
            <el-radio-group v-model="form.serveCanFor">
              <el-radio label="小型-10斤以下"></el-radio>
              <el-radio label="中型-10-20斤"></el-radio>
              <el-radio label="大型-20斤以上"></el-radio>
              <el-radio label="巨型-30斤以上"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="服务规格"
            prop="serveDetial"
          >
            <el-radio-group v-model="form.serveDetial">
              <el-radio label="普通"></el-radio>
              <el-radio label="标准"></el-radio>
              <el-radio label="高级"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="服务耗时"
            prop="serveTime"
          >
            <el-radio-group v-model="form.serveTime">
              <el-radio label="小于1小时"></el-radio>
              <el-radio label="大于1小时"></el-radio>
              <el-radio label="大于2小时"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="服务等级"
            prop="serveLevel"
          >
            <el-select
              v-model="form.serveLevel"
              placeholder="请选择服务等级"
            >
              <el-option
                label="高级服务"
                value="高级服务"
              ></el-option>
              <el-option
                label="中等服务"
                value="中等服务"
              ></el-option>
              <el-option
                label="普通服务"
                value="普通服务"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="价格"
            prop="servePrice"
          >
            <el-select
              v-model="form.servePrice"
              placeholder="请选择服务类型"
            >
              <el-option
                label="80元"
                value="80元"
              ></el-option>
              <el-option
                label="120元"
                value="120元"
              ></el-option>
              <el-option
                label="150元"
                value="150元"
              ></el-option>
              <el-option
                label="200元"
                value="200元"
              ></el-option>
              <el-option
                label="300元"
                value="300元"
              ></el-option>
              <el-option
                label="360元"
                value="360元"
              ></el-option>
              <el-option
                label="460元"
                value="460元"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="clickUpdate"
          >确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[10]"
      :page-size="10"
      layout="total,sizes, prev, pager, next,jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "ServeresApp"
);
export default {
  name: "serveresList",
  // 初始化数据
  data() {
    return {
      _id: "",
      content:"",
      dialogFormVisible: false,
      form: {
        serveName: "",
        serveType: "",
        serveSchedule: "",
        serveCanFor: "",
        serveDetial: "",
        serveTime: "",
        serveLevel: "",
        servePrice: "",
        storeId:""
      },
      rules: {
        serveName: [
          { required: true, message: "请输入宠物名称", trigger: "blur" }
        ],
        serveType: [
          { required: true, message: "请选择服务类型", trigger: "change" }
        ],
        serveSchedule: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        serveCanFor: [
          { required: true, message: "请选择宠物规格", trigger: "change" }
        ],
        serveDetial: [
          { required: true, message: "请选择服务规格", trigger: "change" }
        ],
        serveTime: [
          { required: true, message: "请选择服务时间段", trigger: "change" }
        ],
        serveLevel: [
          { required: true, message: "请选择服务等级", trigger: "change" }
        ],
        servePrice: [
          { required: true, message: "请选择服务价格", trigger: "change" }
        ]
      }
    };
  },
  // 生命周期函数（发送请求在这里）
  mounted() {
    // 渲染
    this.getServeresByPageAsync(); //调用方法
  },
  //计算属性，只有当相关的书写发生改变时，才会调用
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"]) //获取到的所有数据
  },
  // 通过methods来计算值，每一次发生变化都调用的方法
  methods: {
    ...mapActions([
      "getServeresByPageAsync",
      "updateServeresAsync",
      "deleteServeresAsync",
      "serchServeresAsync"
    ]), // mapMutations操作异步方法
    ...mapMutations(["setCurPage", "setEachPage"]), //先获取同步方法-分页
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    // 点击修改按钮，获取到数据，并渲染到修改弹窗的输入框里
    update: function(row) {
      this._id = row._id,
      this.dialogFormVisible = true;
        this.form.serveName = row.serveName,
        this.form.serveType = row.serveType,
        this.form.serveSchedule = row.serveSchedule,
        this.form.serveCanFor = row.serveCanFor,
        this.form.serveDetial = row.serveDetial,
        this.form.serveTime = row.serveTime,
        this.form.serveLevel = row.serveLevel,
        this.form.servePrice = row.servePrice;
    },
    // 点击立即修改方法
    clickUpdate() {
      const that = this;
      // console.log(this._id);
      const _id = this._id;
      // var _id = window.localStorage._id; //从本地获取id
      const serveres = {
        //修改后的数据渲染页面
        _id,
        serveName: this.form.serveName,
        serveType: this.form.serveType,
        serveSchedule: this.form.serveSchedule,
        serveCanFor: this.form.serveCanFor,
        serveDetial: this.form.serveDetial,
        serveTime: this.form.serveTime,
        serveLevel: this.form.serveLevel,
        servePrice: this.form.servePrice
      };
      this.updateServeresAsync(serveres).then(res => {
        if (res.code === 200) {
          this.getServeresByPageAsync();
          that.dialogFormVisible = false;
        }else{
          this.$message.error('修改失败');
        }
      });
    },
    //搜索
    serchList(){
      const serchText= this.content; //输入框
      this.serchServeresAsync(serchText);
    },
    // 点击删除方法
    async Delete(row) {
      // console.log(row)
      this.deleteServeresAsync({ _id: row._id }); //传一个对象过去id
      await this.getServeresByPageAsync();
    }
  },
  // watch监听，指定监听某一个属性，当被监听的某一个属性发生修改，被触发
  watch: {
    curPage() {
      this.getServeresByPageAsync({ curPage: this.curPage }); //分页
    },
    eachPage() {
      this.getServeresByPageAsync({ eachPage: this.eachPage }); //分页
    }
  }
};
</script>
<style scoped>
/* div{
  text-align: center;
} */
.el-button {
  margin-right: 10px;
}
</style>
