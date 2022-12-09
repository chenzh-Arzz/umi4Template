import { useNavigate } from '@/.umi/exports';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';

const Header = () => {
  const [selectNav, setSelectNav] = useState<string>(location.pathname);
  let navigate = useNavigate();
  const navTo = (url: string) => {
    navigate(url, { replace: true });
    setSelectNav(url);
  };
  return (
    <div className={styles.headerContainer}>
      <Row className={styles.navContainer}>
        <Col className={styles.navMenu} span={8}>
          <div
            className={selectNav === '/home' ? styles.navItemSelect : styles.navItem}
            onClick={() => navTo('/home')}>
            驾驶舱
          </div>
          <div
            className={selectNav === '/dataAnalysis' ? styles.navItemSelect : styles.navItem}
            onClick={() => navTo('/dataAnalysis')}>
            算法中心
          </div>
        </Col>
        <Col span={8}></Col>
        <Col className={styles.navMenu} span={8}>
          <div
            className={selectNav === '/auditControl' ? styles.navItemSelect : styles.navItem}
            onClick={() => navTo('/auditControl')}>
            审核管控
          </div>
          <div
            className={selectNav === '/systemSet/account' ? styles.navItemSelect : styles.navItem}
            onClick={() => navTo('/systemSet/account')}>
            系统设置
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
