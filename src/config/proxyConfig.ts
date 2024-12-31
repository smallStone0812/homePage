const proxyServices = {
  "/backGroundBing_image": { target: "https://bing.img.run/" },
};
export default Object.entries(proxyServices).reduce((proxyConfig:any, [path, serviceConfig]) => {
  const { target, ...otherConfig } = typeof serviceConfig === "string" ? { target: serviceConfig } : serviceConfig;
  proxyConfig[path] = {
    target,
    changeOrigin: true,
    rewrite: (_path:any) => _path.replace(path, ""),
    ...otherConfig,
  };
  return proxyConfig;
}, {});
