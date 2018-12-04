<template>
  <el-main>
    <el-table stripe :data="rows" style="width: 100%">
      <el-table-column min-width="150" prop="storeName" label="店名"></el-table-column>
      <el-table-column min-width="150" prop="shopAdd" label="地址"></el-table-column>
      <el-table-column min-width="150" prop="shopCorporate" label="法人"></el-table-column>
      <el-table-column min-width="150" prop="shopTel" label="电话"></el-table-column>
      <el-table-column min-width="150" prop="grade" label="商店等级"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-main>
</template>

<style>
.pagination {
  margin-left: 10%;
  margin-top: 80px;
}
</style>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "StoreList"
);
export default {
  name: "storeList",
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getStoreListByPageAsync();
  },
  watch: {
    curPage() {
      this.getStoreListByPageAsync({ curPage: this.curPage });
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
      handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    ...mapActions(["getStoreListByPageAsync"]),
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
}
</script>
