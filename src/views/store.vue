<template>
    <div class="my">
        <div class="topbar">
            <svg @click="goBack"><use xlink:href="#icon-left"></use></svg>
            <h1>星链商城</h1>
        </div>
        <div class="content-top">
            <div class="first">
                <p>资产折合约:</p>
                <div class="money">
                    <img src="../assets/store/Group.svg" alt="">
                    <p>≈￥1.25000000000000</p>
                </div>
            </div>
            <img class="second" src="../assets/store/Shape.svg" alt="">
        </div>
        <div class="content-main">
            <ul>
                <li class="item">
                    <div class="icon">
                        <img src="../assets/store/ADA.svg" alt="">
                        <span>EOS</span>
                    </div>
                    <div class="number">
                        <p class="total">1个</p>
                        <p class="price">≈¥0.25</p>
                    </div>
                </li>
                <li class="item">
                    <div class="icon">
                        <img src="../assets/store/BWT.svg" alt="">
                        <span>EOS</span>
                    </div>
                    <div class="number">
                        <p class="total">1个</p>
                        <p class="price">≈¥0.25</p>
                    </div>
                </li><li class="item">
                <div class="icon">
                    <img src="../assets/store/XRP.svg" alt="">
                    <span>EOS</span>
                </div>
                <div class="number">
                    <p class="total">1个</p>
                    <p class="price">≈¥0.25</p>
                </div>
            </li><li class="item">
                <div class="icon">
                    <img src="../assets/store/EOS.svg" alt="">
                    <span>EOS</span>
                </div>
                <div class="number">
                    <p class="total">1个</p>
                    <p class="price">≈¥0.25</p>
                </div>
            </li><li class="item">
                <div class="icon">
                    <img src="../assets/store/ADA.svg" alt="">
                    <span>EOS</span>
                </div>
                <div class="number">
                    <p class="total">1个</p>
                    <p class="price">≈¥0.25</p>
                </div>
            </li><li class="item">
                <div class="icon">
                    <img src="../assets/store/STAR.svg" alt="">
                    <span>EOS</span>
                </div>
                <div class="number">
                    <p class="total">1个</p>
                    <p class="price">≈¥0.25</p>
                </div>
            </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "store",
        methods:{
            goBack(){
                window.history.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
.my{  background: url("../assets/my/Group 3.png")  center center no-repeat ;
    background-size: cover;position:fixed;
    top: 0;
    left: 0;
    height: 100%;
    width:100%;z-index: -10;
.topbar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    svg{fill:white;width: 3vh;height: 3vh;flex: 1;}
    h1{color: #fff;flex: 2;}
    }
.content-top{
    display: flex;
    margin-top: 5vh;
    background: url("../assets/my/Background Copy 2.png") center center no-repeat;
    background-size: cover;
    color: #fff;
    .first{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1vh;
        margin-top: 2vh;
        margin-bottom: 2vh;
        flex: 1;
        p{margin-left: 1vh;}
        .money{
            display: flex;align-items: center;flex: 1;
            img{width: 5vh;height:5vh;}
    }

    }
    .second{width: 10vh;height: 10vh;}

}
.content-main{
    background:  rgba(0,0,0,.45);
    display: flex;
    width: 100%;
    color: #fff;
    margin-top: 5vh;
    ul{width: 100%;list-style: none;
        li(last-child){
        border: none;
    }
    }

    .item{
        list-style: none;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid rgba(255,255,255,.45);
        padding: 2vh;
        width: 95%;
        margin-left: 1vh;
        margin-top: .5vh;
        .icon{
            display: flex;
            align-items: center;
            img{width: 4vh;height: 4vh;}
            span{
            background: url("../assets/my/Background Copy 2.png") center center no-repeat;
            background-size: cover;
            border-radius: 3vh;
            padding: 1vh;margin-left: 2vh;

        }
        }
        .number{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .total{
                color: #D668FF;
            }
        }
    }
}
}
</style>