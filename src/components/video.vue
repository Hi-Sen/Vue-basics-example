<template>
    <div class="content2">
        <el-row :gutter="20">
            <el-col :span="12" class="videoHeight" v-for="(item,index) in videoSrcArr" :key="index"><div class="grid-content bg-purple">
                <div v-on:click="playVideo(item)">
                    <video class="videoSty" 
                    :src="item.videoSrc" 
                    :id="item.id"
                    :poster="item.poster"
                    > 您的浏览器不支持 video 视屏播放。</video>     
                </div>
                <div style="text-align:left;">
                    <p class="textSty">
                        <span>{{item.title}}</span>
                    </p>
                    <p class="describe">{{item.text}}</p>
                </div>
            </div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            videoSrcArr:[
                {
                    videoSrc:"http://demo.eleser.mammasay.com/video/lelch.mp4",
                    title:'我是视频一',
                    text:'视频描述视频描述视描述视频描述视频描述视描述视频描述视频描述视描述视频描述视频描述视描述',
                    id:'videoOne',
                    poster:'http://demo.eleser.mammasay.com/video/bg.png'
                },
                {
                    videoSrc:"http://demo.eleser.mammasay.com/video/lelch.mp4",
                    title:'我是视频二',
                    text:'视频描述视频描述视频描述视频描述',
                    id:'videoTwo',
                    poster:'http://demo.eleser.mammasay.com/video/bg2.png'
                },
                {
                    videoSrc:"http://demo.eleser.mammasay.com/video/lelch.mp4",
                    title:'我是视频三',
                    text:'视频描述',
                    id:'videoThree',
                    poster:'http://demo.eleser.mammasay.com/video/bg2.png'
                },
                {
                    videoSrc:"http://demo.eleser.mammasay.com/video/lelch.mp4",
                    title:'我是视频四',
                    text:'视频描述视频描述视描述',
                    id:'videoFour',
                    poster:'http://demo.eleser.mammasay.com/video/bg.png'
                },
            ]
        }
    },
    methods: {
        playVideo(item){
            let vdo = document.getElementById(item.id);
             if (vdo.paused){
                vdo.play();
            }else{
                vdo.pause();
            }
        }
    }
}
</script>
<style>
.content2{
    width:26rem;
    margin:10rem auto;
}
.videoHeight{
    height:12rem;
}
.videoSty{
    width:100%;
}
.textSty{
    font-size: 1rem;
    margin: 0;
}
.describe{
    font-size: .8rem;
    color:#999;
    height:2.4rem;
    overflow: hidden;
}
</style>


