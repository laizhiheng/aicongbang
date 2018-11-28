<template>
  <el-container style="height: 100%;">
    <el-header class="el-header">平台管理系统</el-header>
    <el-container style="height: 100%;">
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
      <el-main style="margin-left:5px;border: 1px solid #eee;">
        <!-- 列表 -->
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <!-- 分页 -->
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
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

.el-message {
  border-bottom: 1px solid black;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
