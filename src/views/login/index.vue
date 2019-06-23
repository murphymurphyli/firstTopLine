<template>
  <div class="login-wrap">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="我已阅读并同意用户协议和隐私条款" name="type" checked></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less">

</style>
