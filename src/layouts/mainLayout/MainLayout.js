import './Style.css';
import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import SiderMenu from './SiderMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { checkAuthorityAsync } from './Slice';
import { useEffect } from 'react';

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
  const location = useLocation();
  const pathname = location.pathname.replace('/', '');
  const dispatch = useAppDispatch();

  // init
  useEffect(() => {
    async function init() {
      const response = await checkAuthorityAsync();
      console.log("check")
      console.log(response)
    }
    init();
  }, [dispatch]);

  return (
    <Layout hasSider>
      <SiderMenu />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: 'white', textAlign: 'center' }} >Header</Header>
        <Content style={{ margin: '0 8px' }}>
          <Breadcrumb items={[{ title: pathname === '' ? 'Home' : pathname }]} />
          <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
