import { Space, Table, Tag } from "antd";

const UserTable = (props) => {
  const { dataUsers } = props;
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

  console.log("render user table 000");
  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};
export default UserTable;
