<template>
  <div class="star-index">
    <div class="png-wrapper"></div>
    <div class="star-index-top">
      <div class="star-index-top-asset">
        <img src="../assets/index/资产.svg" alt="">
        <span>资产：1536896</span>
      </div>
      <div class="star-index-top-power">
        <img src="../assets/index/Shape.svg" alt="">
        <span>当前星力</span>
      </div>

    </div>
    <div class="star-index-body">
      <div class="ball1">0.011 ADA<img src="../assets/store/ADA.svg" alt=""></div>
      <div class="ball2">0.011 XRp<img src="../assets/store/XRP.svg" alt=""></div>
      <div class="ball3">0.011 STAR<img src="../assets/store/STAR.svg" alt=""></div>
      <div class="ball4">0.011 ADA<img src="../assets/store/ADA.svg" alt=""></div>
      <div class="ball5">0.011 PGD<img src="../assets/store/XRP.svg" alt=""></div>
      <div class="ball6">0.011 EOS<img src="../assets/store/EOS.svg" alt=""></div>
      <div class="ball7">0.011 BWT<img src="../assets/store/BWT.svg" alt=""></div>
    </div>
    <div class="star-index-footer">
      <div class="star-index-footer-invite">
        <div class="wrapper">
          <img src="../assets/index/邀请.svg" alt="">
          邀请好友
        </div>
      </div>
      <div class="star-index-footer-wallet">
        <div class="wrapper">
          <img src="../assets/index/Shape1.svg" alt="">
          星链钱包
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: {
      msg: String
    }
  }
</script>

<style scoped lang="scss">
  @mixin ball{position: absolute;
    display: flex;flex-direction: column;
    color: #fff;
    align-items: center;}
  .star-index{
    border: 1px solid transparent;
    z-index: 1;
    .png-wrapper{
      background: url("../assets/index/index.png")  center center no-repeat ;
      background-size: cover;
      position:fixed;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      z-index: -10;
    }
    &-top{
      height: 5vh;
      color: #fff;display: flex;align-items: center;margin-top: 3.3em;
      &-asset{margin-left: 1.45em;display: flex;align-items: center;
        >img{width: 2vh} }
      &-power{margin-left: 1.45em;display: flex;align-items: center; >img{width: 2vh}
      }
    }
    &-body{
      position: relative;
      height: 35vh;
      margin-top: 15vh;
      .ball1{@include ball;top:-5vh;left: 10vh;}
      .ball2{@include ball;top: 0;left: 38vh;}
      .ball3{@include ball;top: 11vh;left: 26vh;}
      .ball4{@include ball;top: 15vh;left: 42vh;}
      .ball5{@include ball;top: 16vh;left: 5vh;}
      .ball6{@include ball;top: 22vh;left: 35vh;}
      .ball7{@include ball;top: 28vh;left: 10vh;}
      img{width: 4vh;
        height: 4vh;}
    }
    &-footer{
      color: #fff;
      margin-top: 20vh;
      display: flex;
      align-items: center;
      &-invite{
        margin-right: 4vh;
        width: 25vh;
        .wrapper{
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 1vh;
          padding-bottom: 1vh;
        }
        img{width: 17pt;}

        background: url("../assets/index/Background Copy 2.svg") center no-repeat ;
        background-size: cover;
        font-size: 14pt;
        margin-left: 1.8em;
      }
      &-wallet{
        width: 25vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .wrapper{
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 1vh;
          padding-bottom: 1vh;
        }
        img{width: 4vh;
          padding-right:  1vh;
        }
        background: url("../assets/index/Background Copy 2.svg") center no-repeat ;
        background-size: cover;
        font-size: 14pt;
        margin-right: 1.8em;


      }

    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
