<template>
    <div class="bg">
        <video width="320" 
                height="240" 
                class="video_bg" 
                src="https://assets.codepen.io/3364143/7btrrd.mp4" 
                autoplay loop muted />
    </div>

    <!-- 背景前 内容框架 -->
    <div class="frame display">
        <div class="frame_content">
            <div class="content_left">
                <div class="content_left_head display">
                    <p>CodeStream</p>
                </div>
                <div class="content_left_content display">
                    
                </div>
            </div>

            <div class="content display" >
                <div class="content_top ">
                    <!-- 搜索组件 -->
                    <search />

                    <div class="top_right">
                        <!-- 黑白模式切换 -->
                        <BW style="position: relative;right: 40%;" />

                        <!-- 头像部分 -->
                        <div class="head_Portrait" ref="headPortrait">
                            <img class="head_img" ref="headPortraitIMG"
                                src="https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2215&q=80" >
                            
                                <Transition name="in">
                                    <div class="lodin" v-if="headPortrait_CU"></div>
                                </Transition>
                                <Transition name="fade">
                                    <div class="head_content" v-if="headPortrait_CU">
                                        <ul class="display">
                                            <li>个人资料</li>
                                            <li>账户详情</li>
                                            <li>账户设置</li>
                                            <li>注销登录</li>
                                        </ul>
                                    </div>
                                </Transition>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    </div>


</template>

<script setup lang="ts">
    import search from '../../components/home/search.vue'
    import BW from '../../components/home/BW.vue'
    import { ref,onMounted,onBeforeUnmount } from 'vue' 


    onMounted(()=>{
        document.addEventListener('click',clickImg);
    })
    onBeforeUnmount(()=>{
        document.addEventListener('click',clickImg)
    })

    const headPortrait = ref();
    const headPortraitIMG = ref();
    const headPortrait_CU = ref(false);
    const clickImg = (e:any) => {
        if(e.target.className == "head_img"){
            headPortrait_CU.value = true;
            headPortrait.value.style.borderRadius = '20%'
            headPortraitIMG.value.style.borderRadius = '20%'
        }else{
            headPortrait_CU.value = false;
            headPortrait.value.style.borderRadius = '50%'
            headPortraitIMG.value.style.borderRadius = '50%'
        }
    }

</script>

<style>
    body{
        color: white;
        font-weight: bold;
        font-family: '../../../public/font/Ubuntu/Ubuntu-Medium.ttf';
    }

    :root{
        --Left-BG:#0000004d;
        --Content-BG:#0000004d;
        --Tab-BG: rgb(36, 36, 36);
        --border-color:#ffffff2f;
    }

    /* 居中用的 */
    .display{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* 背景 */
    .bg{
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
    } video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* filter:invert(100%) hue-rotate(120deg); */
        filter:brightness(120%);
    }

    /* 内容 */
    .frame{
        width: 100%;
        min-height: 100vh;
        }
    .frame_content{
        width: 97%;
        height: 95vh;
        display: flex;
        border-radius: 10px;
        backdrop-filter: blur(3px);
    }
     /* 最左边 */
    .content_left{
        width: 15%;
        border-radius: 10px 0 0 10px;
        background-color: var(--Left-BG);
        display: flex;
        flex-direction: column;
    }
    .content_left_head {
        padding: 0.5em 0;
        font-size: 2em;
        font-weight: bold;
        background-image: linear-gradient(45deg,#fdbeff,#ffbdbd,#fffbbd);
        animation: text 10s infinite linear;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        border-bottom: 1px solid var(--border-color);
    }
    .content_left_content{
        width: 100%;
        height: 100%;
        border-right: 1px solid var(--border-color);
    }


    
    /* 中间 */
    .content{
        width: 85%;
        height: 95vh;
        border-radius:0 10px 10px 0;
        background-color: var(--Content-BG);
        align-items: start;
    }
    /* 中间内容区域的最上面区域 */
    .content_top{
        width: 100%;
        height: 8%;
        display: flex;
        align-items: center;
        justify-content:space-between;
        border-bottom: 1px solid var(--border-color);
    }
    .top_right{
        display: flex;
    }

    
    /* 头像 */
    .head_Portrait{
        transition: all 0.5s;
        border-radius: 50%;
        position: relative;
        right: 20%;
        bottom: 0;
        width: 45px;
        height: 45px;
    }
    .head_Portrait img {
        transition: all 0.5s;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
    .head_content{
        position: relative;
        border-radius: 5%;
        top: 10%;
        left: -120%;
        width: 100px;
        background-color: var(--Tab-BG);
        transform-origin: right top;
    }
    .head_content ul{
        flex-wrap: wrap;
    }
    .lodin{
        position: absolute;
        bottom: -15%;
        height: 3px;
        width: 100%;
        right: 0;
        background-color: #c23eff;
    }

    li {
        list-style: none;
        padding: 10px 0;
    }

    /* 字的渐变 */
    @keyframes text {
        form{
            filter:hue-rotate(0deg);
        }
        to{
            filter:hue-rotate(360deg);
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }

    .in-enter-active,
    .in-leave-active {
        transition: all 1s;
    }

    .in-enter-from,
    .in-leave-to {
        width: 0%;
    }

</style>