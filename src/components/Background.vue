<template>
  <div class="cover">
    <Transition name="fade" mode="out-in">
      <!-- <img  :src="imgData.bgUrl"  alt="" /> -->
      <el-image class="bg" v-show="store.imgLoadStatus"  :src="imgData.bgUrl" fit="fit" @load="imgLoad" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, defineEmits, reactive, onBeforeMount } from "vue";
import { mainStore } from '@/stores/index.ts';
import { getBackGroundImg, getBackGroundImgDetail } from "@/api/Background"
// import { Error } from "@icon-park/vue-next";
const bingApi = import.meta.env.VITE_Background_BING;
const store = mainStore();
const imgData = reactive({
  bgUrl: "",
  alt: "",
})
// 图片加载完成
function imgLoad(){
  console.log('图片加载完成');
  store.setImgLoadStatus(true)
}
const emit = defineEmits(["loadComplete"]);
async function getImgSrcFun() {
  const data = await getBackGroundImg()
  // const dataDetail = await getBackGroundImgDetail()
  // const data = {
  //   "images": [
  //     {
  //       "startdate": "20250113",
  //       "fullstartdate": "202501131600",
  //       "enddate": "20250114",
  //       "url": "/th?id=OHR.CadizSpain_ZH-CN0032172399_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
  //       "urlbase": "/th?id=OHR.CadizSpain_ZH-CN0032172399",
  //       "copyright": "Village of Zahara de la Sierra, Cádiz province, Spain (© SEN LI/Getty Images)",
  //       "copyrightlink": "https://www.bing.com/search?q=%E8%90%A8%E9%98%BF%E6%8B%89%C2%B7%E5%BE%B7%E6%8B%89%E8%B0%A2%E6%8B%89&form=hpcapt&mkt=zh-cn",
  //       "title": "宁静之地",
  //       "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20250113_CadizSpain%22&FORM=HPQUIZ",
  //       "wp": true,
  //       "hsh": "281d51d6434aba29274dbf3434ddf2c2",
  //       "drk": 1,
  //       "top": 1,
  //       "bot": 1,
  //       "hs": []
  //     }
  //   ],
  //   "tooltips": {
  //     "loading": "正在加载...",
  //     "previous": "上一个图像",
  //     "next": "下一个图像",
  //     "walle": "此图片不能下载用作壁纸。",
  //     "walls": "下载今日美图。仅限用作桌面壁纸。"
  //   }
  // }
  imgData.bgUrl = bingApi + data.images[0].url
  imgData.alt = data.images[0].title
}

onBeforeMount(async () => {
  await getImgSrcFun()
});
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

  // z-index: -1;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    filter: blur(10px) brightness(0.99999);
    transition: filter 0.3s, transform 0.3s;
    animation: fade-blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.45s;
  }
}
</style>
