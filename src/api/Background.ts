import service from "./request";
const bingApi = import.meta.env.VITE_Background_BING;
/**
 * bing壁纸官方api
 * https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN
 * 参数：format：（非必须） 返回数据格式，不存在返回xml格式 , js (返回json格式，一般使用这个), xml（返回xml格式）
 *       idx:（非必须）请求图片截止天数,0 今天,-1 截止至明天（预准备的）,1 截止至昨天，类推（目前最多获取到16天前的图片
 *        n：(必须)1-8 返回请求数量，目前最多一次获取8张
 *       mkt：（非必需） 地区 zh-CN
 */
  // 请求壁纸
export function getBackGroundImg() {
  const params = {
    format:'js',
    idx:0,
    n:1,
    mkt:'zh-CN'
  }
  return service({
    baseURL: bingApi,
    url: "/HPImageArchive.aspx",
    method: "GET",
    params
  });
}
  // 壁纸简介
  export function getBackGroundImgDetail() {
    const params = {
      mkt:'zh-CN'
    }
    return service({
      baseURL: bingApi,
      url: "/hp/api/model",
      method: "GET",
      params
    });
  }
