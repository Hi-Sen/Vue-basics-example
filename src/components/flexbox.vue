<template>
    <div>
        <h1>{{msg}}</h1>
        <hr>
        <h3>按比例 2:1:1:1:1:1</h3>
        <div class="one">
            <div class="one-child" :class="index == 0 ? 'one-child2' : '' " v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
        <!-- 给定宽度，可自动换行  
            flex-wrap: wrap; 
            justify-content:flex-start , center , flex-end 
        -->
        <h3>给定宽度，可自动换行</h3>
        <h3>left</h3>
        <div class="two">
            <div class="two-child" v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
         <!-- 中间开始 -->
         <h3>center</h3>
        <div class="two2">
            <div class="two-child" v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
        <!-- 右边开始 -->
        <h3>right</h3>
        <div class="two3">
            <div class="two-child" v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
        <!-- 横向排列   垂直居顶，居中， 居底
            align-items: center; 写在父元素里边，作用在子元素里边  flex-start,center,flex-end
            align-self: center;  写在子元素里边，作用在自身  flex-start,center,flex-end
         -->
        <h3>垂直居顶，居中， 居底</h3>
        <div class="three">
            <div class="three-child three-child-top" >我是 top</div>
            <div class="three-child three-child-center">我是 center</div>
            <div class="three-child three-child-bottom">我是 bottom</div>
        </div>
         <!-- 纵向排列   垂直居左，居中， 居右  ；    flex-direction: column;    建立在 display:flex 基础下。
            align-items: center; 写在父元素里边，作用在子元素里边  flex-start,center,flex-end
            align-self: center;  写在子元素里边，作用在自身  flex-start,center,flex-end
         -->
        <h3>垂直居左，居中， 居右</h3>
        <div class="four four-child-left">
             <div class="four-child " v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
         <div class="four four-child-center">
            <div class="four-child " v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
         <div class="four four-child-right">
            <div class="four-child" v-for="(item,index) in numberArr" :key="index">{{item}}</div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg:"flex-box 布局",
            numberArr:[1,2,3,4,5,6]
        }
    }
}
</script>
<style>
    .one{
        display: flex;
    }
    .one-child{
        flex: 1;
        background-color: aqua;
        line-height:4rem;
        border-right:1px solid #333;
    }
    .one-child2{
        flex: 2;
    }
    .two,.two2,.two3{
        display: flex;
        flex-wrap: wrap;
    }
    .two2{
        justify-content:center
    }
    .two3{
        justify-content:flex-end
    }
    .two-child{
        margin-top:10px;
        min-width:400px;
        background-color: aqua;
        line-height:4rem;
        border-right:1px solid #333;
    }
    .three{
        display: flex;
        /* align-items: center; */
        height:200px;
        background: aqua;
    }
    .three-child{
        flex: 1;
        background:#666;
        border-right:1px solid #fff;
        color:#fff;
    }
    .three-child-top{align-self: flex-start;}
    .three-child-center{align-self: center;}
    .three-child-bottom{align-self: flex-end;}

     .four{
        display: flex;
        /*  纵向排列  flex-direction: column;  */
        flex-direction: column;  
        height:200px;
        background: aqua;
    }
    .four-child-left{align-items: flex-start;}
    .four-child-center{align-items: center;}
    .four-child-right{align-items: flex-end;}
    .four-child{
        width:50px;
        flex: 1;
        background:#666;
        /* align-self: flex-start; */
        border-right:1px solid #fff;
        color:#fff;
    }

</style>


