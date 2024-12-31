import service from "./request";
const bingApi = import.meta.env.VITE_Background_BING;
// bing壁纸api
// <img src="https://bing.img.run/rand_uhd.php" alt="随机获取Bing历史壁纸UHD超高清原图" />
// <img src="https://bing.img.run/rand.php" alt="随机获取Bing历史壁纸1080P高清" />
// <img src="https://bing.img.run/rand_1366x768.php" alt="随机获取Bing历史壁纸普清" />
// <img src="https://bing.img.run/rand_m.php" alt="随机获取Bing历史壁纸手机版1080P高清" />
export function getBackGroundImg() {
  return service({
    baseURL: bingApi,
    url: "/rand_uhd.php",
    method: "GET",
  });
}
