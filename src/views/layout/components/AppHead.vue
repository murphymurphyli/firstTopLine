<template>
    <div>
        <el-col :span="18">江苏传智播客教育科技股份有限公司</el-col>
         <el-col :span="2"></el-col>
        <el-col :span="4">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img width="30" :src="userInfo.photo">
                {{  userInfo.name  }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>git地址</el-dropdown-item>
                <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </div>
</template>

<script>
import { removeUser, getUser } from '@/utils/auth'
export default {
  name: 'AppHead',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    // this.userInfo = JSON.parse(window.localStorage.getItem('user_info'))
    this.userInfo = getUser()
  },
  methods: {
    handleLogout () {
      // this.$message('这是一条消息提示')
      this.$confirm('确认退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清空本地存储中的user_info
        // window.localStorage.removeItem('user_info')
        removeUser()

        this.$router.push({ name: 'login' })
        console.log(111)
        // 跳转到登录页

        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style>
#app{
    height: 60px;
    line-height: 60px;
}

</style>
