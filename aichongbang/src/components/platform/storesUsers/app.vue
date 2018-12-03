<template>
  <div>
    <el-table :data="rows" fit>
      <el-table-column width="100px" prop="username" label="登录名"></el-table-column>
      <el-table-column width="100px" prop="password" label="密码"></el-table-column>
      <el-table-column width="150px" prop="userPhone" label="手机号"></el-table-column>
      <el-table-column width="200px" prop="userMail" label="邮箱"></el-table-column>
      <el-table-column width="100px" prop="userName" label=" 姓名"></el-table-column>
      <el-table-column width="100px" label=" 角色">
        <template slot-scope="scope">
          <p>门店管理员</p>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" >修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "StoresUsers"
);

export default {
  name: "storesUsers",
  computed: {
    ...mapState(["rows","userType"])
  },
  mounted() {
    this.getUsersByTypeAsync()
  },
  watch: {
    userType() {
      this.getUsersByTypeAsync({ userType: this.userType });
    }
  },
  methods: {
    ...mapActions(["getUsersByTypeAsync"])
  }
};
</script>