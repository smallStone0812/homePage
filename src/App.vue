<template>
  <Loading />
  <BackImage @loadComplete="loadComplete" />
  <Transition name="fade" mode="out-in">
    <main id="main" v-if="store.imgLoadStatus">
      <div class="container">
        <pageLeft class="container-left" />
        <pageright class="container-right" />
        <box v-if="pageStore.otherBoxShow" class="container-otherBox" />
      </div>
    </main>
  </Transition>
</template>
<script setup lang="ts">
import Loading from "@/components/Loading.vue";
import BackImage from "@/components/Background.vue";
import { nextTick, reactive } from "vue";
import { helloInit, checkDays } from "@/utils/getTime";
import pageLeft from "@/views/main/left.vue";
import pageright from "@/views/main/right.vue";
import box from "@/views/box/index.vue";
import { mainStore } from "@/stores/index.ts";
const store = mainStore();
const pageStore = reactive({
  otherBoxShow: false,
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
</script>
<style lang="scss" scoped>
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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
      font-family: Nabla;
      font-size: 28px;
      color: #fff;
    }
  }

  p {
    font-size: 1.5rem;
    color: #fff;
  }
}
</style>
