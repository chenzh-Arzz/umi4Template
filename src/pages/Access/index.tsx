/*
 * @Author: ArzzChen
 * @Date: 2022-12-08 09:51:27
 * @LastEditors: ArzzChen
 * @LastEditTime: 2022-12-08 10:11:04
 * @Description: file content
 * @FilePath: /cuttingRecognition/src/pages/Access/index.tsx
 */
import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
