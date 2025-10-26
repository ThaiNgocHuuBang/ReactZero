import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
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
  //   console.log(current, pageSize, setCurrent, setPageSize, total);

  const onChange = (pagination) => {
    // console.log("check", pagination);
    setCurrent(pagination.current);
    setPageSize(pagination.pageSize);
  };
  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      render: (text) => <span>1</span>,
    },
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
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
    </>
  );
};
export default BookTable;
