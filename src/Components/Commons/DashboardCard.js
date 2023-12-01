import { Card, Space, Statistic } from "antd/es";
import React from "react";

export default function DashboardCard({ title, value, icon, styleCard }) {
  return (
    <Card style={styleCard}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
