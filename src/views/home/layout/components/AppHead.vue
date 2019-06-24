<template>
    <div id='app'>
        <el-col :span="18">江苏传智播客教育科技股份有限公司</el-col>
         <el-col :span="2"><img src=""></el-col>
        <el-col :span="4">
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>git地址</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#app{
    height: 60px;
    line-height: 60px;
}

</style>
