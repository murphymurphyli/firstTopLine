<template>
  <div>
    <!-- 数据筛选 -->
    <el-card class="filter-card">
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="文章状态：">
          <el-radio-group v-model="sizeForm.resource" size="medium">
            <el-radio label>全部</el-radio>
            <el-radio
              v-for="(item, index) in statTypes"
              :key="item.label"
              :label="index"
            >{{ item.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表：">
          <el-select v-model="sizeForm.region" placeholder="请选择">
            <el-option label="开发者资讯" value="shanghai"></el-option>
            <el-option label="ios" value="beijing"></el-option>
            <el-option label="c++" value="beijing"></el-option>
            <el-option label="android" value="beijing"></el-option>
            <el-option label="css" value="beijing"></el-option>
            <el-option label="数据库" value="beijing"></el-option>
            <el-option label="区块链" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="sizeForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 数据筛选 -->

    <!-- 文章列表 -->
    <el-card class="filter-card">
      <div slot="header" class="clearfix">
        <span>一共有xxx条数据</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    <!-- 文章列表 -->

    <!-- 分页 -->
      <el-pagination
         background
         layout="prev, pager, next"
         :total="1000">
      </el-pagination>
    </el-card>
    <!-- 分页 -->
  </div>
</template>
<script>
import {  getUser  } from '@/utils/auth'
export default {
  data () {
    return {
      articles: [],
      statTypes: [
        {
          type: 'info',
          label: '草稿'
        },
        {
          type: '',
          label: '待审核'
        },
        {
          type: 'success',
          label: '审核通过'
        },
        {
          type: 'warning',
          label: '审核失败'
        },
        {
          type: 'danger',
          label: '已删除'
        }
      ],
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',   
        desc: ''
      },

      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],

      // created () {
      //   this.loadArticles()
      // },
      // methods: {
      //   async loadArticles () {
      //     const token = getUser().token
      //     const res = await this.$http({
      //       method: 'GET',
      //       url: '/articles',
      //       headers: {
      //          Authorization: `Bearer ${token}`
      //       }
      //     })
      //     console.log(res.data)
      //   }
      // }

    }
  }
}
</script>

<style scoped>
.box-card {
  width: 700px;
}
</style>
