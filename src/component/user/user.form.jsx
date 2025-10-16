import { Input, Button } from "antd";
const UseForm = () => {
  return (
    <div>
      <div style={{ margin: 20 }}>
        <div>
          <span>Full Name</span>
          <Input />
        </div>
        <div>
          <span>Email</span>
          <Input />
        </div>
        <div>
          <span>Password</span>
          <Input.Password />
        </div>
        <div>
          <span>Phone number</span>
          <Input />
        </div>
        <Button type="primary">Create User</Button>
      </div>
    </div>
  );
};
export default UseForm;
