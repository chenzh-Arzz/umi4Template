import { Layout, Menu } from 'antd';
import styles from './index.less';
import type { HeaderProps } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useNavigate } from '@umijs/max';
interface Props {
  menuList: HeaderProps;
}
const Index = (props: Props) => {
  const [menuList, setMenuList] = useState<ItemType[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  let navigate = useNavigate();
  useEffect(() => {
    //console.log(props.menuList);
    const list = props.menuList.menuData
      ?.map((item, idx) => {
        if(item.key===location.pathname)setSelectedKeys([String(idx)]);
        return {
          //...item,
          key: String(idx),
          url: item.key,
          label: item.name,
          icon: item.icon ? <img src={require(`../../assets/login/${item.icon}`)} /> : undefined,
          children:item.children&&item.children.map((subItem,subIdx)=>{
            if(subItem.key===location.pathname){
              setSelectedKeys([String(`${idx}-${subIdx}`),String(idx)]);
              setOpenKeys([String(idx)]);
            }
            return {
              key: String(`${idx}-${subIdx}`),
              url: subItem.key,
              label: subItem.name,
              icon: subItem.icon ? <img src={require(`../../assets/login/${subItem.icon}`)} /> : undefined,
            }
          })
        };
      })
      .filter((it) => it.icon);
    setMenuList(list || []);
  }, []);
  const onOpenChange=(openKeys: string[])=>{
    //console.log(openKeys);
    setOpenKeys([openKeys[openKeys.length-1]]);
  }
  //点击菜单跳转
  const navTo = (info: { key: string; keyPath: string[]; item: {props:{ url: string }} }) => {
    //console.log(info);
    setSelectedKeys(info.keyPath);
    //console.log(info);
    navigate(info.item.props?.url, { replace: true });
  };
  return (
    <Layout.Sider className={styles.menuContainer}>
      <Menu onClick={navTo} mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} items={menuList} selectedKeys={selectedKeys} />
    </Layout.Sider>
  );
};
export default Index;
