import service from "./request";
const url = import.meta.env.VITE_Weather;
export type Params = {
  /** 高德地图key */
  key: String;
  /** 输入城市的 adcode */
  city: String;
  /**
   * 可选值：base/all
   * base:返回实况天气
   * all:返回预报天气
   * */
  extensions: String;
  /** 可选值：JSON,XML */
  output: String;
};
export function getWeather(params: Params) {
  return service({
    baseURL: url,
    url: "",
    method: "GET",
    params,
  });
}

// 返回类型
// {
//     "place": "查询到的地区。",
//     "windScale": "风速描述。",
//     "windSpeed": "风速。",
//     "windDirectionDegree": "风向度。",
//     "windDirection": "风向。",
//     "humidity": "湿度。",
//     "temperature": "温度。",
//     "precipitation": "降水量。",
//     "msg": "如果状态码返回400则msg返回错误信息提示。",
//     "code": "200成功，400错误"
// }
