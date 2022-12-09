/*
 * @Author: ArzzChen
 * @Date: 2022-07-21 14:40:26
 * @LastEditors: ArzzChen
 * @LastEditTime: 2022-12-09 11:42:44
 * @Description: file content
 * @FilePath: /cuttingRecognition/src/app.tsx
 */
// 运行时配置
// import 'tailwindcss/tailwind.css';
import { RunTimeLayoutConfig } from '@umijs/max';

import titleLogo from './assets/login/logo.png';
import Header from './layouts/Header';


import type { HeaderProps } from '@ant-design/pro-components';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
//项目全局的初始状态
export async function getInitialState(menuData?: any): Promise<{ name: string; menuData: any }> {
  //console.log('initialState');
  return { name: '@umijs/max', menuData: menuData };
}
const customPage = ['/login'];
export const layout: RunTimeLayoutConfig = (initialState) => {
  const path = location.pathname;
  //console.log(path);
  return {
    defaultCollapsed:true,
    breakpoint:false,
    title: '岩屑图像采集识别系统',
    logo: titleLogo,
    layout: 'mix',
    pure: customPage.indexOf(path) > -1 ? true : false, //是否删除掉所有的自带界面
    headerHeight: 64,
    siderWidth: 200,
    menuHeaderRender: false,
    headerRender: () => <Header />,
    // menuRender: (props: HeaderProps) => <Menu menuList={props} />,
    // collapsedButtonRender: () => '',
    contentStyle: { background: 'rgba(241, 243, 247, 0.39)', padding: '1.5rem' },
  };
};
