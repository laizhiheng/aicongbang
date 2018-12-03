<template>
  <el-main>
    <el-table stripe :data="tableData" style="width: 100%">
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
  </el-main>
</template>

<style>
.pagination {
  margin-left: 10%;
  margin-top: 80px;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          storeName: "123",
          shopName: "阿斯顿",
          shopLIcenceImg: "查看营业执照图片",
          shopCorporate: "梵蒂冈",
          shopAdd: "法国",
          shopTel: "125455",
          shopImg: "String",
          grade: "5",
          commodity: "查看上平",
          pets: "查看宠物",
          serve: "查看服务",
          users: "查看电员"
        },
        {
          storeName: "123",
          shopName: "阿斯顿",
          shopLIcenceImg: "查看营业执照图片",
          shopCorporate: "梵蒂冈",
          shopAdd: "法国",
          shopTel: "125455",
          shopImg: "String",
          grade: "5",
          commodity: "查看上平",
          pets: "查看宠物",
          serve: "查看服务",
          users: "查看电员"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    }
  }
}
</script>
