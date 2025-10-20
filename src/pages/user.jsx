import UserTable from "../component/user/user.table";
import UserForm from "../component/user/user.form";
import { fetchALLUserAPI } from "../services/api.service";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  useEffect(() => {
    console.log("component did mount 1111");
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchALLUserAPI();
    setDataUsers(res.data);
  };
  return (
    <div>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} />
    </div>
  );
};
export default UsersPage;
