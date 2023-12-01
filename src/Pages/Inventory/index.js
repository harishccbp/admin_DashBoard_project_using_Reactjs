import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory } from "../../API";
import DropdownComponent from "../../Components/Commons/Dropdown";
import ComplexTable from "../../Components/Tables/ComplexTable";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <div style={{ display: 'flex',justifyContent:'space-between' }}>
        <div>
          <Typography.Title level={4}>Inventory</Typography.Title>
        </div>   <div>
          <DropdownComponent /></div>
      </div>
      <ComplexTable />
    </Space>
  );
}
export default Inventory;
