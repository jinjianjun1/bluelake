<template>
  <div class="star-get">
    <div class="get-head">
      <h1>获取星力</h1>
      <p>贡献越多星力越多</p>
    </div>
    <div class="wrapper-outer">
      <div class="wrapper">
        <h1>176</h1>
        <img src="../assets/getstar/Shape.svg" alt="">
        <span>星力</span>
      </div>
    </div>
    <div class="content">
      <div class="content-innerwrapper">
        <div class="content-top">
          <span>最新</span><span>福利</span>
        </div>
        <div class="content-content">
          <ul>
            <li>
              <div class="first">
                <svg>
                  <use xlink:href="#icon-hongbao"></use>
                </svg>
                <div class="second">
                  <h3>免费赢x元话费</h3>
                  <p>秒冲到账</p>
                </div>
              </div>
              <div class="third">
                <svg  ><use xlink:href="#icon-shandian"></use></svg>
                <span>+25星力</span>
              </div>
            </li>
            <li>
              <div class="first">
                <svg>
                  <use xlink:href="#icon-hongbao"></use>
                </svg>
                <div class="second">
                  <h3>送5-15元现金红包</h3>
                  <p>我就是练习写写页面</p>
                </div>
              </div>

              <div class="third">
                <svg><use xlink:href="#icon-shandian"></use></svg>
                <span>+25星力</span>
              </div>
            </li>
            <li>
              <div class="first">
                <svg>
                  <use xlink:href="#icon-hongbao"></use>
                </svg>
                <div class="second">
                  <h3>免费赢x元话费</h3>
                  <p>秒冲到账</p>
                </div>
              </div>

              <div class="third">
                <svg><use xlink:href="#icon-shandian"></use></svg>

                <span>+25星力</span>
              </div>
            </li>
            <li>
              <div class="first">
                <svg>
                  <use xlink:href="#icon-hongbao"></use>
                </svg>
                <div class="second">
                  <h3>送5-15元现金红包</h3>
                  <p>我就是练习写写页面</p>
                </div>
              </div>

              <div class="third">
                <svg><use xlink:href="#icon-shandian"></use></svg>

                <span>+25星力</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
.star-get{
  background: url("../assets/my/Group 3.png")  center center no-repeat ;
  background-size: cover;position:fixed;
  top: 0;left: 0;width:100%;height:100%;z-index: -10;color: #fff;

  .get-head{
    margin-top: 8vh;margin-left: 4vh;margin-bottom: 2vh;
    h1{font-size: 40px;padding-bottom: 2vh}
    p{opacity: .8} }
  .wrapper-outer{
    display: flex;align-items: center;justify-content: center;}
  .wrapper{
    display: flex;
    width: 50vh;
    background: url("../assets/getstar/选项1文字下划线.svg") center center no-repeat;
    background-size:cover ;
    border-radius: 4px;
    h1{font-size: 50px;padding: 2vh 1vh;}
    img{width: 2.4vh;height: 2.4vh;margin-top: 4vh;}
    span{margin-top: 5vh;}

  }
  .content{
    overflow: scroll;
    margin-top: 3vh;
    border-radius: 1vh;
    background: #fff;
    height: 58vh;
    color: #000;
    .content-innerwrapper{
      margin-left: 2.5vh;
      .content-top{
        color: #666666;
        font: 20px "PingFangSC";
      }
      ul li{display: flex;
        width: 52vh;
        border-bottom: 1px solid #DBDBDB;
        align-items: center;
        .first {
          display: flex;
          flex: 1;
          svg{width: 10vh;height: 10vh;padding: 1vh;
            margin-top: 1.5vh;margin-bottom: 1.5vh;}
          .second{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-top: 1vh;
            margin-bottom: 1vh;
          }
        }
        .third{align-self: flex-end;font-weight: bold;font:1.2em "PingFangSC";font-weight: bold;
          svg{width: 4vh;
            height: 4vh;
            fill:#BB3DFF}}
    }

    }
  }
}
</style>