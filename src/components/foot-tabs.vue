<template>
    <div class="foot-tabs">
        <ul>
            <li>
                <router-link :to="{name:'home'}">
                    <div class="wrapper" :class="{active:currentItem===0}" @click="doSomething(0)">
                        <svg class="star-icon" >
                            <use xlink:href="#icon-shouye"></use>
                        </svg>
                        <span>首页</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'getStar'}">
                    <div class="wrapper" :class="{active:currentItem===1}"   @click="doSomething(1)" >
                        <svg class="star-icon">
                            <use xlink:href="#icon-xingli"></use>
                        </svg>
                        <span>获取星力</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'store'}">
                    <div class="wrapper" :class="{active:currentItem===2}"  @click="doSomething(2)">
                        <svg class="star-icon"  >
                            <use xlink:href="#icon-shangcheng"></use>
                        </svg>
                        <span>兑换商城</span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'my'}">
                    <div class="wrapper" :class="{active:currentItem===3}" @click="doSomething(3)" >
                        <svg class="star-icon" >
                            <use xlink:href="#icon-wo"></use>
                        </svg>
                        <span>我</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import '../assets/svg'
    export default {
        name: "foot-tabs",
        data(){
            return{
                currentItem:0,
            }
        },
        methods:{
            doSomething(a){
                this.currentItem=a
            }
        }
    }
</script>

<style scoped lang="scss">
    .foot-tabs{
        height: 10vh;background: #000;display: flex;
        justify-content: space-between;
        &:after{display: block;content: '';clear: both;}
        ul,li{list-style: none;float: left;}
        ul{width: 100%;display: flex;justify-content: space-around;margin-top: 2vh;}
        .wrapper{display: flex;align-items: center;opacity: .6;justify-content: center;flex-direction: column;font-size: 12px}
        .wrapper.active{opacity: 1}
        ul>li svg{width:3vh;height: 3vh;fill:#fff;}
        ul>li svg{opacity: 1;}
        ul>li span{color:#fff;
            display: block;}

    }
</style>