/*
 * @Author: ArzzChen
 * @Date: 2022-09-21 09:46:47
 * @LastEditors: ArzzChen
 * @LastEditTime: 2022-12-09 11:35:35
 * @Description: file content
 * @FilePath: /cuttingRecognition/src/layouts/Header/index.tsx
 */
import { useNavigate } from '@umijs/max';
import { Dropdown, Menu } from 'antd';

import styles from './index.less';

const Header = () => {
  let navigate = useNavigate();
  const onClick = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: '1',
          label: '退出',
        },
      ]}
    />
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        {/* <img className={styles.logoIcon} src={logo}></img> */}
        <div className={styles.logoText}>岩屑图像采集识别系统</div>
      </div>
      <div className={styles.userContainer}>
        {/* <div className={styles.userMessage}>
          <img src={require('@/assets/login/usermessage.png')}></img>
        </div> */}
        <div className={styles.userInfo}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <img src={require('@/assets/login/usericon.png')}></img>
              <span className={styles.userName}>admin</span>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default Header;
