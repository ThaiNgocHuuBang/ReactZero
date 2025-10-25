import { Input, Button, Form, notification, message } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("check value", values);
    // call api values
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "Register success",
        description: " Đăng ký user thành công!",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Error register",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            {
              required: true,
              pattern: new RegExp(/\d+/g),
              message: "Wrong format!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button
          type="primary"
          style={{ marginTop: 20 }}
          onClick={() => form.submit()}
        >
          Register
        </Button>
        {/* <Button
          onClick={() => {
            form.setFieldsValue({
              email: "Test.@gmail.com",
              fullName: "Bruyden",
            });
            console.log("check form");
          }}
        >
          Test{" "}
        </Button> */}
      </Form>
    </div>
  );
};
export default RegisterPage;
