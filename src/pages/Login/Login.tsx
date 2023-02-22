import { useState } from "react";
import { Form, Input, Button, Modal, notification } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { LoginFormSubmitTypes } from "./types";
import API from "../../utils/makeRequest";
import Logo from "../../components/Logo";

import "./Login.scss";

const Login = () => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = async (user: string, pass: string) => {
    const result = await API.auth("signin", {
      email: user,
      password: pass,
    });
    return result;
  };

  const signInFunc = async (values: LoginFormSubmitTypes) => {
    const { username, password } = values;
    try {
      setLoginLoading(true);
      const resp = await signIn(username, password);
      if (resp?.errors) {
        setLoginLoading(false);
        notification.error({
          message: resp.errors?.message,
        });
        return;
      }
      const type =
        resp.user.role === "userCandidate" ? "candidate" : "recruiter";
      dispatch({
        type: "SET_USER_TYPE",
        payload: type,
      });
      dispatch({
        type: "SET_AUTH",
        payload: true,
      });
      localStorage.setItem("access_token", resp.token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      setLoginLoading(false);
      navigate("/home");
    } catch (e: any) {
      setLoginLoading(false);
      if (e?.code === "UserNotFoundException") {
        notification.error({
          message: e?.message,
        });
      }
    }
  };

  const setSignUpModalVisible = () => navigate("/signup");

  const handleCandidateSubmit = (values: LoginFormSubmitTypes) => {
    signInFunc(values);
    dispatch({
      type: "SET_USER_TYPE",
      payload: "candidate",
    });
  };

  return (
    <Modal
      open={true}
      maskClosable={false}
      closable={false}
      bodyStyle={{ padding: "40px" }}
      width="420px"
      footer={null}
      centered
    >
      <Logo />
      <Form
        onFinish={handleCandidateSubmit}
        initialValues={{
          username: process.env.REACT_APP_DEMO_USER,
          password: process.env.REACT_APP_DEMO_PASS,
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              type: "email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loginLoading}>
            Login
          </Button>
        </Form.Item>
        {/* <Form.Item>
          <Button htmlType="submit" block onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </Form.Item> */}
        <Form.Item wrapperCol={{ span: 20 }}>
          <div className="login__otherlinks">
            Not having an account? &nbsp;
            <a onClick={setSignUpModalVisible}>Sign up</a>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
