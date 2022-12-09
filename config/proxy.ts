/*
 *1.当有匹配成功时候，停止匹配，按当前匹配规则处理请求
 *2.首先精确匹配 = -》 其次以xx开头匹配^~ -》然后是按文件中顺序的正则匹配 -》最后是交给 / 通用匹配
 */
// const devTarget = 'http://172.27.64.184:8080/'; // 茂茂
const devTarget = 'http://172.27.11.157/'; // "/"字符可有可无
// const devTarget = 'http://172.27.25.220:8080/'; // "/"杰熹

export default {
  '/jeecg-boot': {
    target: devTarget,
    pathRewrite: {
      '^/jeecg-boot': '/jeecg-boot',
    },
    changeOrigin: true,
  },
};
