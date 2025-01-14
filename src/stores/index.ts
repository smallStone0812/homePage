import { defineStore } from "pinia";

export const mainStore = defineStore("stores", {
  state: () => {
    return {
      //  isLoading: true,
      imgLoadStatus: false,
      //  coverType: '0',
      //  setOpenState: false, // 设置页面开启状态
      isPhone: window.innerWidth <= 720, // 默认根据初始宽度判断, //是否为手机
    };
  },
  getters: {},
  actions: {
    setImgLoadStatus(val: boolean) {
      this.imgLoadStatus = val;
    },
    setIsPhone(val: boolean) {
      this.isPhone = val;
    },
  },
});
