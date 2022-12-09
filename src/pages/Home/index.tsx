/*
 * @Author: ArzzChen
 * @Date: 2022-12-08 09:51:27
 * @LastEditors: ArzzChen
 * @LastEditTime: 2022-12-09 11:29:02
 * @Description: file content
 * @FilePath: /cuttingRecognition/src/pages/Home/index.tsx
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
