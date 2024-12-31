import { defineStore } from "pinia";

export const mainStore = defineStore("stores", {
  state: () => {
    return {
     isLoading: false,
     backgroundShow: true,
     imgLoadStatus:false,
     coverType: '0',
    };
  },
  getters: {
  },
  actions: {
    setImgLoadStatus(val:boolean) {
      this.imgLoadStatus = val;
    }
  },
});
