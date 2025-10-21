import { Table, Popconfirm, Button, message, notification } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";
const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [isDetailUserOpen, setIsDetailUserOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState({});

  const confirmDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete user",
        description: "Xóa thành công",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Xóa thất bại",
        description: JSON.stringify(res.message),
      });
    }
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            onClick={() => {
              setIsDetailUserOpen(true);
              setDataDetail(record);
            }}
            href="#"
          >
            {record._id}
          </a>
        );
      },
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
        <>
          <div style={{ display: "flex", gap: 20 }}>
            <EditOutlined
              style={{ cursor: "pointer", color: "orange", fontSize: 20 }}
              onClick={() => {
                setDataUpdate(record);
                setIsModalUpdateOpen(true);
              }}
            />

            <Popconfirm
              title="Delete user"
              description="Are you sure to delete this task?"
              onConfirm={() => {
                confirmDeleteUser(record._id);
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined
                style={{ cursor: "pointer", color: "red", fontSize: 20 }}
              />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        isDetailUserOpen={isDetailUserOpen}
        setIsDetailUserOpen={setIsDetailUserOpen}
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
      />
    </>
  );
};
export default UserTable;
