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
        <div class="ball1"><div></div></div>
        <div class="ball2"><div></div></div>
        <div class="ball3"><div></div></div>
        <div class="ball4"><div></div></div>
        <div class="ball5"><div></div></div>
        <div class="ball6"><div></div></div>
        <div class="ball7"><div></div></div>
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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
    @mixin ball{display: flex;align-items: center;justify-content: center;}
    @mixin ballInner{padding: .2em;width: .8em;height: .8em;border-radius: 50%;}
  .star-index{
    height: 85vh;
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
    &-body{height: 40vh;width: 40vh;margin-top: 10vh; div{width: 1.8em;height: 1.8em;border-radius: 50%;}
      .ball1{margin-left: 15vh;@include ball;border: 1px solid #CB18FF;
        div{@include ballInner;background: #cb18ff;box-shadow: 1px 1px 3vh #cb18ff} }
      .ball2{border:1px solid #058efd;@include ball;
        div{@include ballInner;background: #058efd;box-shadow: 1px 1px 3vh #058efd} }
      .ball3{border: 1px solid #fff;@include ball;
          div{@include ballInner;background: #fff;box-shadow: 1px 1px 3vh #fff}}
      .ball4{border: 1px solid #058b1f;@include ball;
          div{@include ballInner;background: #058b1f;box-shadow: 1px 1px 3vh #058b1f}}
      .ball5{border: 1px solid #cb18ef;@include ball;
          div{@include ballInner;background: #cb18ef;box-shadow: 1px 1px 3vh #cb18ff}}
      .ball6{border: 1px solid #FF0078;@include ball;
          div{@include ballInner;background: #FF0078;box-shadow: 1px 1px 3vh #ff0078}}
      .ball7{border: 1px solid #FFA400;@include ball;
          div{@include ballInner;background: #FFA400;box-shadow: 1px 1px 3vh #ffa400}}
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
        img{width: 3vh;}
        background: url("../assets/index/Background Copy 2.svg") center no-repeat ;
        background-size: cover;
        font-size: 14pt;
        margin-right: 1.8em;


      }

    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
