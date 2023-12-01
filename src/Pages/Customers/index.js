import { Avatar, Pagination, Row, Space, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getCustomers } from "../../API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const filteredData = dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        style={{ width: '80vw' }}
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "address",
            dataIndex: "address",
            render: (address) => (
              <span>
                <Tag color="blue">{address.address}</Tag>
                <Tag color="magenta">{address.city}</Tag>
              </span>
            ),
          },
        ]}
        dataSource={filteredData}
        pagination={false}
      ></Table>
      <Row justify="end" className="mt-4">
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          pageSize={pageSize}
          total={dataSource.length}
          onChange={handleChangePage}
        />
      </Row>
    </Space>
  );
}

export default Customers;
