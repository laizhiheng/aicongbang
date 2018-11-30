<template>
  <div>
    <el-table :data="rows" style="width: 100%" fit>
      <!-- <el-table-column
        prop="_id"
        label="用户编号">
      </el-table-column>-->
      <el-table-column prop="userAcount" label="用户姓名"></el-table-column>
      <el-table-column prop="userPwd" label="密码"></el-table-column>
      <el-table-column prop="userPhone" label="手机号"></el-table-column>
      <el-table-column prop="userMail" label="邮箱"></el-table-column>
      <el-table-column prop="userName" label=" 姓名"></el-table-column>
      <el-table-column prop="userType" label=" 角色"></el-table-column>
      <el-table-column prop="userStatus" label="状态"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">查看图片</el-button>
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
  "PlatformUsers"
);

export default {
  name: "platformUsers",
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getPlatformUsersByPage();
  },
  watch: {
    curPage() {
      this.getPlatformUsersByPageAsync({ curPage: this.curPage });
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    ...mapActions(["getPlatformUsersByPageAsync"]),
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
