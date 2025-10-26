import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ViewBookDetail from "./view.book.detail";
import { useState } from "react";
const BookTable = (props) => {
  const {
    dataBook,
    setDataBook,
    current,
    pageSize,
    setCurrent,
    setPageSize,
    total,
  } = props;
  const [isOpenDetailBook, setIsOpenDetailBook] = useState(false);
  const [dataDetailBook, setDataDetailBook] = useState({});

  //   console.log(current, pageSize, setCurrent, setPageSize, total);
  // console.log(dataBook);
  const onChange = (pagination) => {
    // console.log("check", pagination);
    setCurrent(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <a
          onClick={() => {
            setIsOpenDetailBook(true);
            setDataDetailBook(record);
          }}
        >
          {record._id}
        </a>
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
      key: "mainText",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        if (text)
          return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(text);
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: 20 }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "orange", fontSize: 20 }}
          ></EditOutlined>
          <DeleteOutlined
            style={{ cursor: "pointer", color: "red", fontSize: 20 }}
          ></DeleteOutlined>
        </div>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataBook}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <ViewBookDetail
        isOpenDetailBook={isOpenDetailBook}
        setIsOpenDetailBook={setIsOpenDetailBook}
        dataDetailBook={dataDetailBook}
        setDataDetailBook={setIsOpenDetailBook}
      ></ViewBookDetail>
    </>
  );
};
export default BookTable;
