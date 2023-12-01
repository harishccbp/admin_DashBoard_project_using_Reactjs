import {
  AppstoreOutlined,
  BookOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  RiseOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TabletFilled,
  UserOutlined,
  UserSwitchOutlined,
  WindowsOutlined
  // @ts-ignore
} from "@ant-design/icons";
// @ts-ignore
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        theme="dark"
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Books",
            key: "/books",
            icon: <BookOutlined />,
          },
          {
            label: "Steps",
            key: "/steps",
            icon: <RiseOutlined />,
          },
          {
            label: "Description",
            key: "/description",
            icon: <UserSwitchOutlined />,
          },
          {
            label: "Tabs",
            key: "/tabs",
            icon: <WindowsOutlined />,
          },
          {
            label: "Timeline",
            key: "/timeline",
            icon: <CalendarOutlined />,
          },
          {
            label: "Result",
            key: "/result",
            icon: <CheckCircleOutlined />,
          },

        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
