import React, { useState } from "react";
import { Form, Input, Button, Modal, notification, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import API from "../../utils/makeRequest";
import { UserDetailTypes } from "./types";
import Logo from "../../components/Logo";

import "./Signup.scss";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const signUpApi = async ({ username, password, type }) => {
    const result = await API.auth("signup", {
      email: username,
      password: password,
      role: getTypeForAPI(type),
    });
    return result;
  };

  const getTypeForAPI = (type: string) => {
    switch (type) {
      case "candidate":
        return "userCandidate";
      case "recruiter":
        return "userRecruiter";
      default:
        return "";
    }
  };

  const signUp = async (values: UserDetailTypes) => {
    const { email, password, type } = values;
    try {
      setLoading(true);
      const resp = await signUpApi({ username: email, password, type });
      notification.success({
        message: "Successfully created account",
        description: email,
      });
      localStorage.setItem("access_token", resp.token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      setLoading(false);
      dispatch({
        type: "SET_AUTH",
        payload: true,
      });
      navigate(`/${type}/onboarding`);
    } catch (error: any) {
      setLoading(false);
      if (error?.code === "UsernameExistsException") {
        notification.error({
          message: error?.message,
        });
      }
    }
  };

  const openSignInModal = () => navigate("/login");

  // const handleConfirmSignup = async (val: ConfirmSignInFormValueTypes) => {
  //   confirmSignup({ ...val, email: userDetail.email });
  // };

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
        name="basic"
        initialValues={{
          type: "candidate",
        }}
        onFinish={(val) => {
          console.log(val);
          signUp(val);
          dispatch({
            type: "SET_USER_TYPE",
            payload: val.value,
          });
        }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
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

        <Form.Item
          name="type"
          valuePropName="value"
          label="You are a"
          rules={[{ required: true }]}
        >
          <Radio.Group optionType="button" buttonStyle="solid">
            <Radio.Button value="candidate">Candidate</Radio.Button>
            <Radio.Button value="recruiter">Recruiter</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign up
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 20 }}>
          <div className="signup__otherlinks">
            Already have an account? &nbsp;
            <a onClick={openSignInModal}>Sign in</a>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Signup;
