import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Timeline, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

import AreaChart from "@ant-design/plots/es/components/area";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import DashboardCard from "../../Components/Commons/DashboardCard";
import Areaplot from "../../Components/Graphs/Areaplots";
import BarChart from "../../Components/Graphs/BarChart";
import DonutChart from "../../Components/Graphs/DonutChart";
import GaugeMap from "../../Components/Graphs/GaugeMap";
import GroupedBar from "../../Components/Graphs/GroupedBar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          styleCard={{ width: '20vw', backgroundColor: "rgba(0,255,0,0.25)" }}
          icon={
            <ShoppingCartOutlined
              style={{
                color: "black",
                backgroundColor: "rgba(0,255,0,0.55)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={orders}

        />
        <DashboardCard
          styleCard={{ width: '20vw', backgroundColor: "rgba(0,0,255,0.25)" }}
          icon={
            <ShoppingOutlined
              style={{
                color: "black",
                backgroundColor: "rgba(0,0,255,0.55)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          styleCard={{ width: '20vw', backgroundColor: "rgba(0,255,255,0.25)" }}
          icon={
            <UserOutlined
              style={{
                color: "black",
                backgroundColor: "rgba(0,255,255,0.55)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={customers}
        />
        <DashboardCard
          styleCard={{ width: '20vw', backgroundColor: "rgba(255,0,0,0.25)" }}
          icon={
            <DollarCircleOutlined
              style={{
                color: "black",
                backgroundColor: "rgba(255,0,0,0.55)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        {/*  */}
        <Card style={{ width: "40vw", height: '45vh' }}>

          <h1>Timeline</h1>
          <Timeline
            items={[
              {
                children: 'Create a services site 2015-09-01',
              },
              {
                children: 'Solve initial network problems 2015-09-01',
              },
              {
                children: 'Technical testing 2015-09-01',
              },
              {
                children: 'Network problems being solved 2015-09-01',
              },
            ]}
          />
        </Card>
        <Card style={{ width: "40vw", height: '45vh' }}>
          <Areaplot />   </Card>
      </Space>
      <Space>
        {/*  */}
        <Card style={{ width: "40vw", height: '45vh' }}>
          <BarChart /> </Card>
        <Card style={{ width: "40vw", height: '45vh' }}>
          <DonutChart />
         </Card>
      </Space>
      <Space style={{ paddingBottom: 20 }}>
        {/*  */}
        <Card style={{ width: "40vw", height: '45vh' }}>
          <GaugeMap />
          {/* <RecentOrders /> */}
        </Card>
        <Card style={{ width: "40vw", height: '45vh' }}>
          <GroupedBar />
        </Card>
      </Space>


    </Space>
  );
}


function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        style={{ width: '40vw' }}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default Dashboard;
