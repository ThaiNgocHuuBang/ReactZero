import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { isDetailUserOpen, setIsDetailUserOpen, dataDetail, setDataDetail } =
    props;
  // console.log("show props", isDetailUserOpen, setIsDetailUserOpen);

  return (
    <>
      <Drawer
        width={"25vw"}
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
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: 30 }}>Avatar:</h4>
          <img
            style={{ width: 200, height: 200 }}
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              dataDetail.avatar
            }`}
            alt=""
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <label
            htmlFor="btnUpload"
            style={{
              padding: 10,
              background: "green",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Upload Avatar
          </label>
          <input type="file" hidden id="btnUpload" />
        </div>
      </Drawer>
    </>
  );
};
export default ViewUserDetail;
