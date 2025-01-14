<template>
  <Loading />
  <BackImage @loadComplete="loadComplete" />

  <Transition name="fade" mode="out-in">
    <main :id="store.isPhone ? 'phoneMain' : 'main'" v-if="store.imgLoadStatus">
      <div class="container">

        <pageright v-if="!store.isPhone" class="container-right" />

        <pageLeft v-if="!pageStore.rightBoxShow" class="container-left" />
        <pageright v-if="store.isPhone && pageStore.rightBoxShow" class="container-right" />
        <box v-if="pageStore.otherBoxShow" class="container-otherBox" />
      </div>
      <div @click="openMenu" v-if="store.isPhone" class="phoneMenu card">
        <i class="icon-santiaogang  iconfont"></i>
      </div>
    </main>
  </Transition>
</template>
<script setup lang="ts">
import Loading from "@/components/Loading.vue";
import BackImage from "@/components/Background.vue";
import { nextTick, onMounted, reactive } from "vue";
import { helloInit, checkDays } from "@/utils/getTime";
import pageLeft from "@/views/main/left.vue";
import pageright from "@/views/main/right.vue";
import box from "@/views/box/index.vue";
import { mainStore } from "@/stores/index.ts";
import cursorInit from "@/utils/cursor";
const store = mainStore();
const pageStore = reactive({
  otherBoxShow: false,
  rightBoxShow: false
})
// 加载完成事件
const loadComplete = () => {
  nextTick(() => {
    // 欢迎提示
    helloInit();
    // 默哀模式
    checkDays();
  });
};
function openMenu() {
  pageStore.rightBoxShow = !pageStore.rightBoxShow
}
onMounted(() => {
  // 自定义鼠标
  cursorInit();
})
</script>
<style lang="scss" scoped>
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: #333;

  .container {
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 0.75rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-left,
    &-right,
    &-otherBox {
      flex: 1;
      height: 100%;
    }

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // font-family: Nabla;
      font-size: 28px;
      color: #fff;
    }
  }

  p {
    font-size: 1.5rem;
    color: #fff;
  }
}

// 媒体查询：适用于手机设备
#phoneMain {
  width: 100%;
  height: 100%;

  .container {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-left {
      flex: 1;
    }

  }


}

.phoneMenu {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%);
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-santiaogang {
    font-size: 2rem;

  }
}

.phoneMenu:active {
  background-color: #585858;
}
</style>
