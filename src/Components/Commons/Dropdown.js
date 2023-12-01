import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';
const items = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="/dashboard">
        Dashboard
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="/books">
        Books
      </a>
    ),

  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/description">
        Description
      </a>
    ),

  },
  {
    key: '4',
    danger: true,
    label: (
      <a rel="noopener noreferrer" href="/orders">
        Orders
      </a>
    ),
  },
];
const DropdownComponent = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Go to
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownComponent;
