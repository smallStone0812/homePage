<template>
    <div class="weather">
        <!-- 天气数据获取失败 -->
         功能正在火速开发中（天气）
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, } from "vue"
import { getWeather } from "@/api/weather"

function getWeatherFun() {

    const params = {
        key: '0b6610cf5d61406a7a5ec35e525a6c90',
        city: '10009',
        extensions: "base",
        output:"JSON"
    }
    getWeather(params).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}


onMounted(() => {
    // getWeatherFun();
})
</script>

<style lang="scss" scoped>
.weather {
    // width: 100%;
    // height: 100%;
    // padding: 20px;
    text-align: center;
}
</style>