import { Avatar, Collapse, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";
import React from "react";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const text = `
Magazines
Toothpaste
Food
Candy
Laundry detergent
Shampoo
`;
  const itemsNest = [
    {
      key: '1',
      label: 'List of Orders by Customers in Hyderabad',
      children: <p>{text}</p>,
    },
  ];
  const collapseItems = [
    {
      key: '1',
      label: 'List of Orders by Customers in India',
      children: <Collapse defaultActiveKey="1" items={itemsNest} />,
    },
    {
      key: '2',
      label: 'List of Orders by Customers in Germany',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'List of Orders by Customers in UK',
      children: <p>{text}</p>,
    },
  ];

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  const onCollapseChange = (key) => {
    console.log(key);
  };
  return (
    <Space size={20} direction="vertical">
      <Collapse onChange={onCollapseChange} items={collapseItems} />;
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
       style={{width:'80vw'}}
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Orders;
