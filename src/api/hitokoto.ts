import service from "./request";
const url = import.meta.env.VITE_Hitokoto;
export type Params = {
  c: /** 动画 */
    | "a"
    /** 漫画 */
    | "b"
    /** 游戏 */
    | "c"
    /** 文学 */
    | "d"
    /** 原创 */
    | "e"
    /** 来自网络 */
    | "f"
    /** 其他 */
    | "g"
    /** 影视 */
    | "h"
    /** 诗词 */
    | "i"
    /** 网易云 */
    | "j"
    /** 哲学 */
    | "k"
    /** 抖机灵 */
    | "l";
};
export function getHitokoto(params:Params) {
  return service({
    baseURL: url,
    url: "",
    method: "GET",
    params,
  });
}
