<template>
  <div>
    <el-table :data="rows" style="width: 100%" fit>
      <el-table-column width="150px" prop="memberPhone" label="电话号码"></el-table-column>
      <el-table-column width="100px" prop="memberAcout" label="昵称"></el-table-column>
      <el-table-column width="100px" prop="memberName" label="真实姓名"></el-table-column>
      <el-table-column width="180px" prop="memberCard" label="会员卡"></el-table-column>
      <el-table-column width="100px" prop="memberImg" label=" 头图">
        <template slot-scope="scope">
          <el-popover placement="left" width="300px" trigger="hover">
            <img width="300px" :src="`http://localhost:3000/`+scope.row.memberImg.url" alt="alt">
            <img
              height="50px"
              slot="reference"
              :src="`http://localhost:3000/`+scope.row.memberImg.url"
              alt="alt"
            >
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column width="200px" prop="memberAdd" label=" 送货地址"></el-table-column>
      <el-table-column width="150px" prop="memberArea" label=" 区域"></el-table-column>
      <el-table-column prop="memberPoint" label="积分"></el-table-column>
      <el-table-column width="150px" prop="memerpets" label="宠物">
        <template slot-scope="scope">
          <el-popover placement="left" width="600px" trigger="click">
            <el-table :data="gridData">
              <el-table-column width="100px" property="petsName" label="名称"></el-table-column>
              <el-table-column width="100px" property="petsClass" label="品类"></el-table-column>
              <el-table-column width="100px" property="petsType" label="种类"></el-table-column>
              <el-table-column width="100px" property="petsColor" label="颜色"></el-table-column>
              <el-table-column width="100px" property="petsDate" label="出生日期"></el-table-column>
              <el-table-column width="100px" property="petsGender" label="性别"></el-table-column>
              <el-table-column width="100px" property="petsPrice" label="价格"></el-table-column>
              <el-table-column width="100px" property="petsImg" label="图片"></el-table-column>
            </el-table>
            <el-button slot="reference">查看宠物</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handeleEdit(scope.$index,scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "Petowners"
);

export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  name: "petowners",
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getPetownersByPageAsync();
  },
  watch: {
    petowners() {
      this.getPetownersByPageAsync({ curPage: this.curPage });
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handeleEdit(index,row){
      console.log(index,row)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      console.log(this);
    },
    ...mapActions(["getPetownersByPageAsync"]),
    ...mapMutations(["setCurPage"]),
    firstPage() {
      if (this.curPage != 1) {
        this.setCurPage(1);
      }
    },
    lastPage() {
      if (this.curPage != this.maxPage) {
        this.setCurPage(this.maxPage);
      }
    }
  }
};
</script>