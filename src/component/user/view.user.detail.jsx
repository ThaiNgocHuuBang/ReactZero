import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { isDetailUserOpen, setIsDetailUserOpen, dataDetail, setDataDetail } =
    props;
  // console.log("show props", isDetailUserOpen, setIsDetailUserOpen);

  return (
    <>
      <Drawer
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => {
          setDataDetail({});
          setIsDetailUserOpen(false);
        }}
        open={isDetailUserOpen}
      >
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: 30 }}>Id:</h4>
          <p>{dataDetail._id}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: 30 }}>Name:</h4>
          <p>{dataDetail.fullName}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: 30 }}>email:</h4>
          <p>{dataDetail.email}</p>
        </div>
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: 30 }}>Phone:</h4>
          <p>{dataDetail.phone}</p>
        </div>
      </Drawer>
    </>
  );
};
export default ViewUserDetail;
