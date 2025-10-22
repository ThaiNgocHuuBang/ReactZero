import { Input, Button, Form } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log("check value", value);
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
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          // rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          // rules={[{ required: true, message: "Please input your username!" }]}
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
      </Form>
    </div>
  );
};
export default RegisterPage;
