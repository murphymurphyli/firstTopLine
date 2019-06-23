<template>
    <el-container>
      <el-aside class="Aside" width="200px">Aside</el-aside>
      <el-container>
        <el-header class="Header">Header</el-header>
        <el-main class="Main">Main</el-main>
      </el-container>
    </el-container>
</template>

<script>
import AppAside from './components/AppAside.vue'
import AppHead from './components/AppHead.vue'
export default {
  name: 'AppLayout',
  components: {
    AppAside,
    AppHead
  },
  data () {
    return {

    }
  }

}
</script>

<style>
.el-container {
    height: 100%
}
.el-aside {
    background-color: #D3DCE6
}
.el-header {
    background-color: #B3C0D1
}
.el-main {
    background-color:#666
}

</style>
