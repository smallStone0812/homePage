<template>
  <div :class="store.backgroundShow ? 'cover show' : 'cover'">
    <Transition name="fade" mode="out-in">
      <img v-show="store.imgLoadStatus" :src="bgUrl" class="bg" alt="cover" @load="imgLoadComplete"
        @error.once="imgLoadError" @animationend="imgAnimationEnd" />
    </Transition>
    <!-- <Transition name="fade" mode="out-in">
      <a v-if="store.backgroundShow" class="down" :href="bgUrl" target="_blank">
        查看原图
      </a>
    </Transition> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, defineEmits } from "vue";
// import { getBackGroundImg } from "@/api/Background"
import { mainStore } from '@/stores/index.ts';
// import { Error } from "@icon-park/vue-next";

const store = mainStore();
const bgUrl = ref('https://bing.img.run/uhd.php');
// const imgTimeout = ref();
const emit = defineEmits(["loadComplete"]);

// 图片加载完成
const imgLoadComplete = () => {
  store.setImgLoadStatus(true);
};

// // 图片动画完成
const imgAnimationEnd = () => {
  console.log("壁纸加载且动画完成");
  // 加载完成事件
  emit("loadComplete");
};

// // 图片显示失败
const imgLoadError = () => {
  console.error("壁纸加载失败：", bgUrl.value);
  ElMessage({
    message: "壁纸加载失败，已临时切换回默认",
  });
};


onMounted(() => { });

onBeforeUnmount(() => { });
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  z-index: -1;

  // &.show {
  //   z-index: 1;
  // }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    filter: blur(10px) brightness(0.99999);
    transition:  filter 0.3s,  transform 0.3s;
    animation: fade-blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.45s;
  }

  .gray {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
      radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);

    transition: 1.5s;

    &.hidden {
      opacity: 0;
      transition: 1.5s;
    }
  }

  .down {
    font-size: 16px;
    color: white;
    position: absolute;
    top: 30px;
    left: 30px;
    right: 0;
    // margin: 0 auto;
    display: block;
    padding: 10px 5px;
    border-radius: 8px;
    background-color: #00000030;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }

    &:active {
      transform: scale(1);
    }
  }
}
</style>
