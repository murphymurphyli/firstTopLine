<template>
  <div class="loginin">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item>
        <el-col :span="24">
          <img src="../../assets/logo_index.png" alt>
        </el-col>
      </el-form-item>
      <el-form-item prop="mobile">
        <el-col :span="24">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="code">
        <el-col :span="13">
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="6">
          <el-button @click="handleSendCode">发送验证码</el-button>
        </el-col>
      </el-form-item>
      <el-form-item prop="agree">
        <el-col :span="24">
          <el-checkbox v-model="form.agree" label="我已阅读并同意用户协议和隐私条款" name="type"></el-checkbox>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="24">
          <el-button class="loging" @click="handleLogin">登录</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from 'axios'
import '@/vendor/gt'
import { saveUser } from '@/utils/auth'
import initGeetest from '@/utils/init-geetest'
export default {
  name: 'AppLogin',
  data () {
    return {
      form: {
        mobile: '',
        code: '',
        agree: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          {
            pattern: /\d{11}/,
            message: '请输入有效的电话号码',
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /\d{6}/, message: '请输入有效的验证码', trigger: 'blur' }
        ],
        agree: [
          { required: true, message: '请同意协议' },
          { pattern: /true/, message: '请同意协议' }
        ]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          return
        }
        this.submitLogin()
      })
    },
    async submitLogin () {
      try {
        // const { mobile, code } = this.form
        const res = await this.$http({
          method: 'POST',
          url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
          data: this.form
        })
        const userInfo = res.data.data
        // window.localStorage.setItem('user_info', JSON.stringify(userInfo))
        saveUser(userInfo)
        console.log(res.data)
        this.$message({
          message: '登陆成功了',
          type: 'success'
        })
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        this.$message.error('登录失败，手机号或者验证码错误')
      }
    },
    handleSendCode () {
      // console.log('handleSendCode')
      this.$refs['form'].validateField('mobile', errorMessage => {
        if (errorMessage.trim().length > 0) {
          return
        }
        this.showGeetest()
      })
    },
    async showGeetest () {
      const { mobile } = this.form
      const res = await this.$http({
        method: 'GET',
        url: `/captchas/${mobile}`
      })
      const { data } = res.data
      const captchaObj = await initGeetest(
        {
          // 以下配置参数来自服务端 SDK
          gt: data.gt,
          challenge: data.challenge,
          offline: !data.success,
          new_captcha: data.new_captcha,
          product: 'bind'
        })
      // 这里可以调用验证实例 captchaObj 的实例方法
      // console.log(captchaObj)
      captchaObj
        .onReady(function () {
          // 验证码ready之后才能调用verify方法显示验证码
          captchaObj.verify()
        })
        .onSuccess(async function () {
          const {
            geetest_challenge: challenge,
            eetest_validate: validate,
            geetest_seccode: seccode
          } = captchaObj.getValidate()
          await this.$http({
            method: 'GET',
            url: `/sms/codes/${mobile}`,
            params: {
              challenge,
              validate,
              seccode
            }
          })
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
