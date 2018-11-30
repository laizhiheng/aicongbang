<template>
  <div>
    <el-table
      ref="singleTable"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column property="goodsName" label="名称"></el-table-column>
      <el-table-column property="goodsType" label="品类"></el-table-column>
      <el-table-column property="goodsTaste" label="口味"></el-table-column>
      <el-table-column property="goodsSize" label="包装规格"></el-table-column>
      <el-table-column property="goodsRegion" label="产地"></el-table-column>
      <el-table-column property="goodsDate" label="出厂日期"></el-table-column>
      <el-table-column property="goodsTime" label="保质期"></el-table-column>
      <el-table-column property="goodsPrice" label="价格"></el-table-column>
      <el-table-column property="goodsImg" label="图片"></el-table-column>
      <el-table-column property="store" label="所属商店"></el-table-column>
      <el-table-column property="name" label="操作" style="width:300px"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="100" class="pagination"></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "Commdity"
);
export default {
  name:'commdityList',
  
    
  //   return {
  //     tableData: [
  //       {
  //         date: "2016-05-02",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1518 弄"
  //       },
  //       {
  //         date: "2016-05-04",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1517 弄"
  //       },
  //       {
  //         date: "2016-05-01",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1519 弄"
  //       },
  //       {
  //         date: "2016-05-03",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1516 弄"
  //       }
  //     ],
  //     currentRow: null
  //   };
  // },
  computed: {
    // ...mapState(["row", "curPage", "eachPage", "maxPage", "total"])
    
  },
  mounted (){
    this.getStuentsPageAsync();
  },
  watch: {
    // curPage() {
    //   this.getStuentsPageAsync({ curPage: this.curPage });
    // }
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    ...mapActions(["getStuentsPageAsync"])
    // handleSizeChange(val) {
    //   this.getStuentsPageAsync({ eachPage:val});
    // },
    // handleCurrentChange(val) {
    //   this.setCurPage(val);
    // },
    // ...mapActions(["getStuentsPageAsync"]),
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
    // },
  }

};
</script>


<style>
/* .pagination {
  position: absolute;
  left: 30%;
  bottom: 20px;
} */
</style>

