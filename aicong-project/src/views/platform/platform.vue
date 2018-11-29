<template>
<<<<<<< HEAD:aicong-project/src/components/platform.vue
  <el-container style="height: 100%;">
    <el-header class="el-header">宠物平台管理系统</el-header>
=======
  <el-container style="height: 100%;min-height:450px;">
>>>>>>> cb67e5b1071de040a4f03983d74c58c7059b02e5:aicong-project/src/views/platform/platform.vue
    <el-header class="el-header">宠物平台管理系统s</el-header>
    <el-container>
      <el-aside width="210px" style="background-color: rgb(238, 241, 246); border: 1px solid #eee;">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>门店
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">门店列表</el-menu-item>
              <el-menu-item index="1-2">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-more"></i>宠主
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">宠主列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>审核
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">审核列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="margin-left:5px;border: 1px solid #eee;position: relative;">
        <!-- 列表 -->
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="storeName" label="店名"></el-table-column>
            <el-table-column prop="shopAdd" label="地址"></el-table-column>
            <el-table-column prop="shopCorporate" label="法人"></el-table-column>
            <el-table-column prop="shopTel" label="电话"></el-table-column>
            <el-table-column prop="shopImg" label="头图"></el-table-column>
            <el-table-column prop="shopName" label="营业执照号码"></el-table-column>
            <el-table-column prop="shopLIcenceImg" label="营业执照图片"></el-table-column>
            <el-table-column prop="grade" label="商店等级"></el-table-column>
            <el-table-column prop="commodity" label="商品"></el-table-column>
            <el-table-column prop="pets" label="宠物"></el-table-column>
            <el-table-column prop="serve" label="服务"></el-table-column>
            <el-table-column prop="users" label="门店管理员"></el-table-column>
          </el-table>
        </template>
        <!-- 分页 -->
        <el-pagination background layout="prev, pager, next" :total="100" class="pagination"></el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>


<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  font-weight: 900px;
  margin-bottom: 5px;
}

.el-aside {
  color: #333;
}

.pagination {
  position: absolute;
  left: 30%;
  bottom: 20px;
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
        }
      ]
    };
  }
};
</script>
