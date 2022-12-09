// import { defineConfig } from '@umijs/max';
import { defineConfig } from '@umijs/max';

import proxy from './proxy';
import routes from './routes';


/*
 * @Author: ArzzChen
 * @Date: 2022-07-21 14:40:26
 * @LastEditors: ArzzChen
 * @LastEditTime: 2022-12-09 11:33:30
 * @Description: file content
 * @FilePath: /cuttingRecognition/config/config.ts
 */
/*
 * @Author: ArzzChen
 * @Date: 2022-12-08 09:51:27
 * @LastEditors: ArzzChen
 * @LastEditTime: 2022-12-08 10:05:00
 * @Description: file content
 * @FilePath: /cuttingRecognition/.umirc.ts
 */
export default defineConfig({
  // mfsu: false,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "岩屑图像采集识别系统",
  },
  proxy: proxy,
  routes:routes,
  npmClient: "pnpm",
  dva: {},
});

//umi项目配置
// export default defineConfig({
//   // 关闭 mfsu 功能
//   // mfsu: false,
//   //antd: {},
//   access: {},
//   model: {},
//   initialState: {},
//   request: {},
//   layout: {
//     title: '岩屑识别',
//   },
//   // history: {
//   //   type: 'hash',
//   // },
//   routes: routes,
//   proxy: proxy,
//   npmClient: 'pnpm',
//   // tailwindCss 某些样式会把Antd的默认样式冲掉 （比如button）
//   tailwindcss: false,
//   // 全局色调配置
//   theme: {
//     '@Title-Color': '#364a63',
//     '@Title-Left': 'rgba(42, 125, 237, 1)',
//   },
// });
