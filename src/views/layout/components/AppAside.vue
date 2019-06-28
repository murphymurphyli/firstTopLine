<template>
    <div id='app'>

        <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router>
              <el-submenu index="0">
                <template slot="title">
                  <span>首页</span>
                </template>
              </el-submenu>

                <el-submenu index="1">
              <template slot="title">内容管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">发布文章</el-menu-item>
                <el-menu-item index="1-2">内容列表</el-menu-item>
                <el-menu-item index="1-3">评论列表</el-menu-item>
                <el-menu-item index="1-4">素材管理</el-menu-item>
              </el-menu-item-group>
             </el-submenu>

             <el-submenu index="2">
              <template slot="title">粉丝管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">图文数据</el-menu-item>
                <el-menu-item index="2-2">粉丝概况</el-menu-item>
                <el-menu-item index="2-3">粉丝画像</el-menu-item>
                <el-menu-item index="2-4">粉丝列表</el-menu-item>
              </el-menu-item-group>
             </el-submenu>

             <el-submenu index="3">
              <template slot="title">账户信息</template>
             </el-submenu>

            </el-menu>
        </el-col>

    </div>
</template>

<script>
export default {
  name: 'AppAside',
  data () {
    return {

    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style>

</style>
