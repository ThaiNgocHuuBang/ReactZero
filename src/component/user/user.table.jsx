import { Space, Table, Tag } from "antd";
import { fetchALLUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const [dataUsers, setDataUsers] = useState([
    { _id: 1, fullName: "Nguyen Van A", email: "aaaa@gmail.com" },
  ]);
  useEffect(() => {
    console.log("component did mount 1111");
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchALLUserAPI();
    setDataUsers(res.data);
  };

  console.log("render user table 000");
  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};
export default UserTable;
