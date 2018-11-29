<template>
  <el-container>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column width="150px" prop="storeName" label="店名"></el-table-column>
        <el-table-column width="150px" prop="shopAdd" label="地址"></el-table-column>
        <el-table-column width="150px" prop="shopCorporate" label="法人"></el-table-column>
        <el-table-column width="150px" prop="shopTel" label="电话"></el-table-column>
        <el-table-column width="150px" prop="shopImg" label="头图"></el-table-column>
        <el-table-column width="150px" prop="shopName" label="营业执照号码"></el-table-column>
        <el-table-column width="150px" prop="shopLIcenceImg" label="营业执照图片"></el-table-column>
        <el-table-column width="150px" prop="grade" label="商店等级"></el-table-column>
        <el-table-column width="150px" prop="commodity" label="商品"></el-table-column>
        <el-table-column width="150px" prop="pets" label="宠物"></el-table-column>
        <el-table-column width="150px" prop="serve" label="服务"></el-table-column>
        <el-table-column width="150px" prop="users" label="门店管理员"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

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
        }
      ]
    };
  }
};
</script>
