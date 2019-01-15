<template>
    <div class="foot-tabs">
        <ul>
            <li>
                <svg :class="{active:currentItem===0}"  class="star-icon" @click="doSomething(0)">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
            </li>
            <li>
                <svg :class="{active:currentItem===1}"  class="star-icon" @click="doSomething(1)" >
                    <use xlink:href="#icon-xingli"></use>
                </svg>
            </li>
            <li><svg :class="{active:currentItem===2}"  class="star-icon" @click="doSomething(2)" >
                <use xlink:href="#icon-shangcheng"></use>
            </svg></li>
            <li><svg :class="{active:currentItem===3}"  class="star-icon" @click="doSomething(3)">
                <use xlink:href="#icon-wo"></use>
            </svg></li>
        </ul>
    </div>
</template>

<script>
    import '../assets/svg'
    export default {
        name: "foot-tabs",
        data(){
            return{
                currentItem:0
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
        ul>li svg{width:4vh;height: 4vh;fill:#fff;opacity: .6;}
        ul>li svg.active{opacity: 1;}

    }
</style>