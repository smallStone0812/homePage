<template>
    <div class="homeLeft">
        <div class="logo">
            <!-- logg图标 -->
            <div class="logo-img">
                <img src="@/assets/logo.png" alt="">

            </div>
            <!-- logg名称 -->
            <div class="logo-text">
                <span>smallStore</span>
                <!-- <span></span> -->
            </div>
        </div>
        <div class="card description ">
            <div class="content">
                <div class="left">
                    <i class="icon-fu-left iconfont"></i>
                </div>
                <div class="center">
                    <span class="Hello">Hello World！</span>
                    <span class="message">一个建立于 21 世纪的小站，存活于互联网的边缘</span>
                </div>
                <div class="right">
                    <i class="icon-fu-right iconfont"></i>
                </div>
            </div>
        </div>
        <div class="socialContact">
            <div class="socialContact-li"></div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, } from "vue"

</script>

<style lang="scss" scoped>
.homeLeft {
    width: 100%;
    margin-right: 10px;
    .logo {
        display: flex;
        // justify-content: space-evenly;
        align-items: flex-end;

        .logo-img {
            width: 5rem;
            height: 5rem;

            img {
                width: 100%;
                height: 100%;
                margin-right: 10px;
            }

            .icon-shitou {
                font-size: 5rem;
                // margin-right: 20px;
            }
        }

        .logo-text {
            font-size: 5rem;
            font-family: 'g Gerak', sans-serif;
            color: #fff;
        }
    }

    .description {
        cursor: pointer;
        padding: 20px;
        margin-top: 20px;
        width: auto;
        .content {
            display: flex;

            .left {
                display: flex;
                align-items: self-start;

                .icon-fu-left {
                    font-size: 1rem;
                }
            }

            .right {
                display: flex;
                align-items: self-end;

                .icon-fu-right {
                    font-size: 1rem;
                }
            }

            .center {
                display: flex;
                flex-direction: column;
                padding: 15px;

                .Hello {
                    font-size: 1rem;
                    font-family: 'g Gerak', sans-serif;
                }

                .message {
                    // letter-spacing: ;
                    font-size: 1.3rem;
                }
            }
        }
    }
}
</style>