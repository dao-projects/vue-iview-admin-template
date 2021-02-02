<template>
  <div class="layout login">
    <Layout class="layout-box">
      <Content class="content">
        <div class="login-box">
          <div class="left">
            <div class="txt">登录</div>
            <div class="desc">欢迎使用知识目录共享平台！</div>
          </div>
          <div class="right">
            <Form ref="formUserRef" :model="loginForm" :rules="ruleUser">
              <FormItem prop="username">
                <Input type="text" v-model="loginForm.username" placeholder="用户名" />
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="loginForm.password" placeholder="密码" />
              </FormItem>
              <FormItem>
                <Button
                  type="warning"
                  long
                  @click="handleSubmit('formUserRef')"
                  :loading="loading"
                  style="margin-top: 30px"
                  >Login
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </Content>
      <!--      Copyright [dates] by [author/owner] -->
      <Footer class="layout-footer">Copyright ©2021 by daoxin. All rights reserved.</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      loading: false,
      loginForm: {
        username: "admin",
        password: "123456"
      },
      ruleUser: {
        username: [{ required: true, message: "请输入正确的用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { type: "string", min: 6, max: 18, message: "密码长度为6~18个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success("Success!");
          this.loading = true;
          // userLogin
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(res => {
              console.log(res);
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          this.$Message.error("请正确填写表单后再继续操作!");
          return false;
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.login {
  background: #000;
  text-align: center;

  .layout-box {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-perspective: 600px;
    perspective: 600px;
    background: -webkit-gradient(linear, left top, right bottom, from(#a4c5c7), to(#2d3f48));
    background: linear-gradient(to bottom right, #a4c5c7, #2d3f48);
    background: -webkit-gradient(linear, left top, right bottom, from(#eec5c7), to(#443f48));
    background: linear-gradient(to bottom right, #aac5c7, #bb3f48);
    background: #c6ffdd;
    background: -webkit-linear-gradient(to top, #f7797d, #fbd786, #c6ffdd);
    background: linear-gradient(to top left, #f7797d, #fbd786, #c6ffdd);
    background: #f12711;
    background: -webkit-linear-gradient(to bottom right, #f5af19, #f12711);
    background: linear-gradient(to bottom right, #5919f5, #f12711);
  }

  .content {
    justify-content: center; //子元素水平居中
    align-items: center; //子元素垂直居中
    display: -webkit-flex;

    .login-box {
      display: flex;
      height: 320px;
      margin: 0 auto;
      width: 640px;
    }

    .left {
      background: #333333;
      height: calc(100% - 40px);
      top: 20px;
      position: relative;
      width: 50%;

      .txt {
        font-size: 50px;
        font-weight: 900;
        margin: 50px 40px 40px;
        color: #ffffff;
      }

      .desc {
        color: #999;
        font-size: 14px;
        line-height: 1.5;
        margin: 40px;
      }
    }

    .right {
      background: #ffffff;
      box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
      color: #f1f1f2;
      position: relative;
      width: 50%;
      transition: box-shadow 0.2s ease-out;
      padding: 50px 30px;

      &:hover {
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(255, 255, 255, 1);
        transition: box-shadow 0.2s ease-out;
      }

      .form {
        margin: 40px;
        position: absolute;
      }
    }
  }

  .layout-footer {
    background: none;
    color: #fff;
  }
}
</style>
