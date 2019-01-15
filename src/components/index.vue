<template>
  <div class="star-index">
    <div class="png-wrapper"></div>
    <div class="star-index-top">
      <div class="star-index-top-asset">
          <img src="../assets/资产.svg" alt="">
          <span>资产：1536896</span>
        </div>
      <div class="star-index-top-power">
           <img src="../assets/Shape.svg" alt="">
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
          <img src="../assets/邀请.svg" alt="">
          邀请好友
        </div>
      </div>
      <div class="star-index-footer-wallet">
        <div class="wrapper">
          <img src="../assets/Shape1.svg" alt="">
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
  .star-index{
    height: 85vh;
    z-index: 1;
    .png-wrapper{
      background: url("../assets/index.png")  center center no-repeat ;
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
      height: 40vh;
      width: 40vh;
      margin-top: 10vh;
      div{width: 1.8em;height: 1.8em;border-radius: 50%;}
      .ball1{border: 1px solid #CB18FF;display: flex;align-items: center;justify-content: center;margin-left: 15vh;
        div{padding: .2em;width: 1em;height: 1em;border-radius: 50%;background: #cb18ff;} }
      .ball2{border: 1px solid #058efd;display: flex;align-items: center;justify-content: center;
            div{padding: .2em;width: .4em;height: .4em;border-radius: 50%;background: #058efd;} }
      .ball3{border: 1px solid #fff;display: flex;align-items: center;justify-content: center;
          div{padding: .2em;width: .4em;height: .4em;border-radius: 50%;background: #fff;}}
      .ball4{border: 1px solid #058b1f;display: flex;align-items: center;justify-content: center;
          div{padding: .2em;width: .4em;height: .4em;border-radius: 50%;background: #058b1f;}}
      .ball5{border: 1px solid #cb18ef;display: flex;align-items: center;justify-content: center;
          div{padding: .2em;width: .4em;height: .4em;border-radius: 50%;background: #cb18ef;}}
      .ball6{border: 1px solid #FF0078;display: flex;align-items: center;justify-content: center;
          div{padding: .2em;width: .4em;height: .4em;border-radius: 50%;background: #FF0078;}}
      .ball7{border: 1px solid #FFA400;display: flex;align-items: center;justify-content: center;
          div{padding: .2em;width: .4em;height: .4em;border-radius: 50%;background: #FFA400;}}
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

        background: url("../assets/Background Copy 2.svg") center no-repeat ;
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
        background: url("../assets/Background Copy 2.svg") center no-repeat ;
        background-size: cover;
        font-size: 14pt;
        margin-right: 1.8em;


      }

    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
