<template>
    <div id='app'>
        <el-col :span="18">江苏传智播客教育科技股份有限公司</el-col>
        <el-col :span="6">
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
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
el-col {
    display: flex;
    justify-content:center
}

</style>
