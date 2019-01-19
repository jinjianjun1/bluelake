<template>
    <div class="information">
        <div class="first">
            <img class="logo" src="../assets/my/360星链LOGO.png" alt="">
        </div>
        <div class="information-input">
            <label ><input type="number" id="mobile-number" placeholder="请输入手机号"></label>
            <label ><input type="password" id="password" placeholder="请输入密码"></label>
        </div>
        <div class="login" @click="this.$message('这是一条消息提示')">
            <h1>立即开启</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my"
    }
</script>

<style scoped lang="scss">
.information{
    background: url("../assets/my/Group 3.png")  center center no-repeat ;
    background-size: cover;position:fixed;
    height: 92vh;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .first{
        margin-top: 2vh;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo{width: 13vh;height: 13vh;}
    }
    &-input{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vh;
        height: 20vh;
        label{
            width: 90%;
            input{font-size: 16px;
                background: transparent;color: #fff;outline: none;
                border: none;margin: 3vh 0;
                border-bottom: 1px solid  #ddd;
                width: 100%;
            } input::-webkit-input-placeholder{color: #fff;
                              margin-bottom: 2em;}
            input::-moz-placeholder{color: #fff;}
            input::-ms-input-placeholder{color: #fff;}
        }
    }
    .login{
        display: flex;
        justify-content: center;
        width: 90%;
        background: #ccc;
        font: 1.8vh 'PingFangSC' ;
        color: #fbfbfb;
        padding: 1vh;
        border-radius: 12px;
    }
}
</style>