import {
  SettingOutlined,
  MenuOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../styles/menu.css';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', '', <MenuOutlined />),
  getItem('Order History', 'order-history', <ReloadOutlined />),
  getItem('Settings', 'settings', <SettingOutlined />),
];

const Navigation = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');

  // Handle Navigate
  const onClick = (e) => {
    navigate(`/account/${e.key}`)
    setCurrent(e.key);
  };

  return (
    <div className='border rounded-lg overflow-hidden flex-1 h-fit'>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        style={{ borderInlineEnd: 'none' }}
      />
    </div>
  );
};

export default Navigation;