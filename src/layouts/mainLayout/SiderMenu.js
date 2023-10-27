import { Layout, Menu } from 'antd';
import { HomeOutlined, DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
// import './Style.css';

const { Sider } = Layout;

export default function SiderMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleSiderMenuClick = action => {
    navigate(action.key);
  };

  const menuItems = [
    {key: '/demo', icon: <HomeOutlined />, label: 'Home'},
    {key: '/demo/about', icon: <PieChartOutlined />, label: 'About'},
    {key: '/demo/user', icon: <UserOutlined />, label: 'User',
      children: [
        { key: '/demo/user/history', icon: <DesktopOutlined />, label: 'History' },
        { key: '/demo/user/team', icon: <DesktopOutlined />, label: 'Team' },
      ],
    },
  ]

  return (
    <Sider 
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline" onClick={handleSiderMenuClick} items={menuItems} />
    </Sider>
  );
}
