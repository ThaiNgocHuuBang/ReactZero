import { Input, Button } from "antd";
import axios from "axios";
import { useState } from "react";
const UseForm = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const handleCick = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = { fullName, email, password, phone };
    axios.post(URL_BACKEND, data);
    // console.log("clicked", { fullName, email, password, phone });
  };
  return (
    <div>
      <div style={{ margin: 20 }}>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <Button type="primary" onClick={handleCick}>
          Create User
        </Button>
      </div>
    </div>
  );
};
export default UseForm;
