import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserAddOutlined,
  BookOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };
  const { user } = useContext(AuthContext);
  console.log("checkkkkk", user);
  //  const data = useContext(AuthContext);
  // console.log("checkkkkk", data);
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UserAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    {
      label: "Cài đặt",
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key: "login",
          icon: <LoginOutlined />,
        },
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
