<template>
  <el-container style="height: 100%;min-height:450px;background-color:#fff;">
    <el-header class="el-header" style="background-color:#fff">爱宠帮店主管理平台</el-header>
    <el-container>
      <!-- 左侧列表 -->
      <el-aside width="210px" style="background-color:#fff; border: 1px solid #eee;">
        <el-menu router>
          <!-- //商品管理 -->
          <el-submenu index="/platform" style="background-color:#fff;border-bottom:1px solid black">
            <template slot="title">
              <i class="el-icon-menu"></i>商品管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/store/commdityList">商品列表</el-menu-item>
              <el-menu-item index="/store/addCommdity">增加列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- //宠物管理 -->
          <el-submenu index="/users" style="background-color:#fff;border-bottom:1px solid black">
            <template slot="title">
              <i class="el-icon-tickets"></i>宠物管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/store/petsList">宠物列表</el-menu-item>
              <el-menu-item index="/store/addPets">增加宠物</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- //服务管理 -->
          <el-submenu index="2" style="background-color:#fff;border-bottom:1px solid black">
            <template slot="title">
              <i class="el-icon-more"></i>服务管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/store/serveList">服务列表</el-menu-item>
              <el-menu-item index="/store/addServe">增加服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- //本店会员 -->
          <el-submenu index="3" style="background-color:#fff;border-bottom:1px solid black">
            <template slot="title">
              <i class="el-icon-more"></i>本店会员
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">宠主列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- //订单管理 -->
          <el-submenu index="4" style="background-color:#fff;border-bottom:1px solid black">
            <template slot="title">
              <i class="el-icon-more"></i>订单管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" style="background-color:#fff;border-bottom:1px solid black">
            <template slot="title">
              <i class="el-icon-more"></i>我的店铺
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">店铺列表</el-menu-item>
              <el-menu-item index="2-1">新增店铺</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="margin-left:5px;border: 1px solid #eee;position: relative;">
        <!-- 主体 -->
        <template>
          <!-- <el-table :data="tableData" style="width: 100%">
               <el-table-column prop="shopLIcenceImg" label="缩略图"></el-table-column>
            <el-table-column prop="shopName" label="产品名称"></el-table-column>
            <el-table-column prop="shopCorporate" label="规格"></el-table-column>
            <el-table-column prop="shopTel" label="产地"></el-table-column>
            <el-table-column prop="types" label="品类"></el-table-column>
            <el-table-column prop="" label="修改信息"></el-table-column>
            
          </el-table>-->
          <router-view></router-view>
        </template>
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
// export default {
//   data() {
//     return {
//       tableData: [
//         {

//             shopLIcenceImg: "图片丢失",
//           shopName: "阿斯顿鱼肉罐头",
//            shopCorporate: "500g",
//           shopTel: "法国",
//         types:"宠物主食",

//         }
//       ]
//     };
//   }
// };
</script>
