<template>
  <div class="div">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
        :style="{'font-size': '22px','font-weight': 'bold','text-align': 'center'}"
      >
        <span>新增服务</span>
      </div>
      <el-form
        ref="form"
        :model="form"
        label-width="160px"
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
              value="SPA"
            ></el-option>
            <el-option
              label="洗澡除菌"
              value="洗澡除菌"
            ></el-option>
            <el-option
              label="宠物医疗"
              value="宠物医疗"
            ></el-option>
            <el-option
              label="游乐园"
              value="游乐园"
            ></el-option>
            <el-option
              label="其他"
              value="其他"
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
                <el-form-item
          label="选择门店"
          prop="storeId"
        >
          <el-select
            v-model="form.storeId"
            placeholder="选择门店"
          >
            <el-option
              label="二狗子的店"
              value="二狗子的店"
            ></el-option>
          
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="create"
          >立即创建</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "ServeresApp"
);
export default {
  name: "addServeres",
  // 初始化数据
  data() {
    return {
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
  methods: {
    ...mapActions(["addServeresAsync"]),
    // 点击新增方法
    create: function() {
      this.$refs["form"].validate(valid => {
        if (valid === false) {
          return false;
        }
        const serveres = {
          serveName: this.form.serveName,
          serveType: this.form.serveType,
          serveSchedule: this.form.serveSchedule,
          serveCanFor: this.form.serveCanFor,
          serveDetial: this.form.serveDetial,
          serveTime: this.form.serveTime,
          serveLevel: this.form.serveLevel,
          servePrice: this.form.servePrice,
          // storeId:this.form.storeId
        };
        console.log(serveres)
        this.addServeresAsync(serveres).then(() => {
          //调用异步方法，传数据过去;   //.then方法，里面回调函数，成功后弹窗
          this.$message({
            message: "新增成功",
            type: "success"
          });
          //把所有输入框清空 每个el-form-item 上必须有prop属性并且name值跟v-model值相同
          this.$refs["form"].resetFields();
        })
      });
    },
    //重置表单
    reset() {
      this.$refs["form"].resetFields();
    }
  }
};
</script>
<style>
h3 {
  text-align: center;
}
.div {
  width: 80%;
}
.box-card{
  position: static;
  width: 100%;
}

</style>
