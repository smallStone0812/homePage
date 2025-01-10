<template>
    <div class="function">
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="left">
                    <!-- 一言模块 -->
                    <Hitokoto />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="right card">
                    <!-- 时间模块 -->
                    <div class="timeData-block">
                        <div class="date-block">
                            <span>{{ currentTime.year }}&nbsp;年&nbsp;</span>
                            <span>{{ currentTime.month }}&nbsp;月&nbsp;</span>
                            <span>{{ currentTime.day }}&nbsp;日&nbsp;</span>
                            <span>{{ currentTime.weekday }}</span>
                        </div>
                        <div class="time-block">
                            <span>{{ currentTime.hour }}:{{ currentTime.minute }}:{{ currentTime.second }}</span>
                        </div>
                    </div>
                    <!-- 天气模块 -->
                    <weather />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import Hitokoto from "@/components/Hitokoto.vue";
import weather from "@/components/weather.vue";
import { getCurrentTime, type CurrentTime } from "@/utils/getTime";
import { onMounted, ref, onBeforeUnmount } from "vue"
// 当前时间
const currentTime = ref<CurrentTime>({
    year: 0,
    month: "",
    day: "",
    weekday: "",
    hour: "",
    minute: "",
    second: "",
});
const timeInterval = ref();

// 更新时间
const updateTimeData = () => {
    currentTime.value = getCurrentTime();
};

onMounted(() => {
    updateTimeData();
    timeInterval.value = setInterval(updateTimeData, 1000);
});

onBeforeUnmount(() => {
    clearInterval(timeInterval.value);
});
</script>

<style lang="scss" scoped>
.function {
    height: 165px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .el-row {
        width: 100%;
        height: 100%;
        margin: 0 !important;
        .el-col:nth-child(1) {
            padding-right: 10px;
            padding-left: 0 !important;
        }

        .el-col:nth-child(2) {
            padding-left: 10px;
            padding-right: 0 !important;
        }

        .left,
        .right {
            width: 100%;
            height: 100%;
        }

        .right {
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .timeData-block {
                display: flex;
                flex-direction: column;
                align-items: center;

                .date-block {
                    font-size: 1.1rem
                }

                .time-block {
                    font-family: UnidreamLED;
                    font-size: 3.25rem !important;
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>