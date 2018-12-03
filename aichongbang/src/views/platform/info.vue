<template>
  <el-container style="height: 100%;min-height:450px;">
    <el-header class="el-header">爱宠帮平台管理系统</el-header>
    <el-container>
      <!-- 左侧列表 -->
      <el-aside width="210px" style="background-color: rgb(238, 241, 246); border: 1px solid #eee;">
        <el-menu router >
          <el-submenu index="/platform">
            <template slot="title">
              <i class="el-icon-menu"></i>门店
            </template>
            <el-menu-item-group>
              <el-menu-item index="/platform/storeList">门店列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/users">
            <template slot="title">
              <i class="el-icon-tickets"></i>用户
            </template>
            <el-menu-item-group>
              <el-menu-item index="/platform/platformUsers">平台用户</el-menu-item>
              <el-menu-item index="/platform/storesUsers">门店用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/petMaster">
            <template slot="title">
              <i class="el-icon-more"></i>宠主
            </template>
            <el-menu-item-group>
              <el-menu-item index="/platform/petMasterList">宠主列表</el-menu-item>
              <el-menu-item index="/platform/addPetMaster">新增宠主</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/auditing">
            <template slot="title">
              <i class="el-icon-edit"></i>审核
            </template>
            <el-menu-item-group>
              <el-menu-item index="/platform/auditingList">门店注册审核</el-menu-item>
              <el-menu-item index="/platform/auditingList">店主注册审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/supplier">
            <template slot="title">
              <i class="el-icon-goods"></i>供应商
            </template>
            <el-menu-item-group>
              <el-menu-item index="/platform/supplier">供应商列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="margin-left:5px;border: 1px solid #eee;">
        <!-- 主体 -->
          <router-view></router-view>
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
</style>

<script>

</script>
