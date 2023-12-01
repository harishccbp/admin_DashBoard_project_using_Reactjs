import { Breadcrumb, Layout, theme } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import CustomIcon from './Components/Commons/CustomIcon';
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { pathname } = location;

  if (pathname === '/' || pathname === '/register') {
    return <PageContent />;
  }
  const breadItems = pathname.split("/")[1];
  console.log(breadItems, 'breadItems');
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            overflow: 'auto',
            position: 'fixed',
            left: 0,
            minHeight: '100vh',
          }}
        >
          <div className="demo-logo-vertical">
            <CustomIcon />
          </div>
          <SideMenu />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header
            style={{
              padding: 20,
              background: colorBgContainer,
              position: 'fixed',
              width: 'calc(100% - 200px)',
              zIndex: 1,
            }}
          >
            <AppHeader />
          </Header>
          <Breadcrumb style={{ paddingTop: 80, paddingLeft: 30 }} items={[
            {
              title: 'Home',
            },
            {
              title: <a href="">Application Center</a>,
            },
            {
              title: <a href="">Application List</a>,
            },
            {
              title: 'An Application',
            },
          ]} />
          <Content
            style={{
              margin: '16px 30px',
              overflow: 'initial',
            }}
          >
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                minHeight: 360,
              }}
            >
              <PageContent />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
            Harish Nadikatla@2023
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
