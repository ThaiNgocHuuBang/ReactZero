import UserTable from "../component/user/user.table";
import UserForm from "../component/user/user.form";
const UsersPage = () => {
  return (
    <div>
      user page
      <hr />
      <br />
      <UserForm />
      <UserTable />
    </div>
  );
};
export default UsersPage;
