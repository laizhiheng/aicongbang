<template>
  <div>
    <el-table :data="rows" style="width: 100%" fit>
      <el-table-column prop="memberPhone" label="电话号码"></el-table-column>
      <el-table-column prop="memberAcount" label="昵称"></el-table-column>
      <el-table-column prop="memberName" label="真实姓名"></el-table-column>
      <el-table-column prop="menberCard" label="会员卡"></el-table-column>
      <el-table-column prop="memberImg" label=" 头图"></el-table-column>
      <el-table-column prop="memberAdd" label=" 送货地址"></el-table-column>
      <el-table-column prop="memberPoint" label="积分"></el-table-column>
      <el-table-column prop="pets" label="宠物">
          <template slot-scope="scope">
          <el-button type="text" size="small">查看宠物</el-button>
        </template>
      </el-table-column>
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
