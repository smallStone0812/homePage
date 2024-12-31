import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
// 创建新的axios实例
export const service = axios.create({
  baseURL: "",
  timeout: 30 * 1000,
  headers: {
    common: { Accept: "application/json; charset=UTF-8" },
    patch: { "Content-Type": "application/json; charset=UTF-8" },
    post: { "Content-Type": "application/json; charset=UTF-8" },
    put: { "Content-Type": "application/json; charset=UTF-8" },
  },
  transformRequest: (data) => JSON.stringify(data),
});
// 响应状态
interface responseParams {
  [key: number]: string;
}
const ResponseStatus: responseParams = {
  400: "错误请求",
  401: "未授权，请重新登录",
  403: "拒绝访问",
  404: "请求错误,未找到该资源",
  405: "请求方法未允许",
  408: "请求超时",
  500: "服务器端出错",
  501: "网络未实现",
  502: "网络错误",
  503: "服务不可用",
  504: "网络超时",
  505: "http版本不支持该请求",
};
// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // 判断是否使用mockjs如果是则修改config.baseURL
    //config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    // console.log("请求拦截器拦截中", config);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    if (response.config?.responseType == "blob" && response.data?.type === "application/json") {
      return Promise.reject();
    } else {
      return response.data;
    }
  },
  (error: AxiosError) => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      const statusCode: number = error.response.status;
      error.message = Object.keys(ResponseStatus).includes(String(statusCode))
        ? ResponseStatus[statusCode]
        : `连接错误${statusCode}`;
      ElMessage.error(error.message);
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        ElMessage.error("服务器响应超时，请刷新当前页");
      }
      // alert("连接服务器失败");
    }
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.reject(error.response || error);
  }
);

export function GET(url: String, params: any): Promise<any> {
  return service({
    ...params,
    url,
    method: "GET",
  });
}

export function POST(url: String, data: any, params?: any): Promise<any> {
  return service({
    ...params,
    url,
    data,
    method: "POST",
  });
}
export const axiosNew = {
  get: GET,
  post: POST,
};

export default service;
