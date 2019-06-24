<template>
 <div class="loginin">
   <el-form ref="form" :model="form">
      <el-form-item>
        <el-col :span="24">
          <img src="../../assets/logo_index.png" alt="">
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="24">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-col>
      </el-form-item>
        <el-form-item>
          <el-col :span="13">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
          </el-col>
          <el-col :span="2">
            &nbsp;&nbsp;&nbsp;
          </el-col>
          <el-col :span="6">
            <el-button @click="handleSendCode">发送验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="24">
            <el-checkbox label="我已阅读并同意用户协议和隐私条款" name="type" checked></el-checkbox>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="24">
            <el-button class="loging" @click="onSubmit">登录</el-button>
          </el-col>
        </el-form-item>
  </el-form>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AppLogin',
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleSendCode () {
      // console.log('handleSendCode')
      const { mobile } = this.form
      axios({
        method: 'GET',
        url: `https://mock.boxuegu.com/mock/434/v1_0/captchas/${mobile}`
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-form {
  width: 400px;
  height: 400px;
  background-color: lightblue;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 50px;
  box-sizing: border-box;
  .loging {
    width: 100%;
  }
  }
</style>
