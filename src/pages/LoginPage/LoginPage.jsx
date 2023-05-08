import React, { useState } from "react";
import { LockOutlined, UserOutlined} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Modal, Radio, Row, message } from "antd";
import "./loginPage.css";
import { LogoAlta } from "../../assets";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_USERS, GET_USERS } from "./query/login-query";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [section, setSection] = useState("Login");

//   Graph QL
  const {
    data: usersData,
    loading: isUsersLoading,
    error: isUsersError
  } = useQuery(GET_USERS)

  const [register, { loading: isRegisterLoading }] = useMutation(ADD_USERS, {
    refetchQueries: [GET_USERS]
  })

  const onLogin = (values) => {
    const users = usersData.users;
    const isUser = users.find((user) => user.username === values.username);
    const isVerified = isUser && isUser.password === values.password;

    if (isVerified) {
      localStorage.setItem("token", true);
      navigate("/home");
    } else {
      Modal.warning({
        title: "Login Failed!",
        content: "Username/password is not correct",
        centered: true,
        onOk() {
          setSection("Login");
        }
      });
    }
  };
  const onRegister = (values) => {
    const users = usersData?.users;
    const isExisted = users?.some((item) => item.username === values.username);

    if (!isExisted) {
      register({
        variables: {
          object: {
            ...values
          }
        },
        onError: (err) => {
          message.open({
            type: "error",
            content: `${err.message}`
          });
        },
        onCompleted: () => {
          Modal.success({
            title: "Register Success!",
            content: "Please login using your account",
            centered: true,
            onOk() {
              form.resetFields(), setSection("Login");
            }
          });
        }
      });
    } else {
      Modal.warning({
        title: "Register Failed!",
        content: "Username already existed",
        centered: true
      });
    }
  };


  const onChange = ({ target: { value } }) => {
    setSection(value);
    form.resetFields();
  };
  return (
    <div>
      <div className="container-center">
        <Row>
          <Col className="left-side" span={12}>
            <img src={LogoAlta} alt="Logo Alta" className="img-logo" />
          </Col>
          <Col className="right-side" span={12}>
            <Card title="Welcome Alta’s Friend!" bodyStyle={{ width: "440px" }} className="card-login">
              <Row style={{ justifyContent: 'start', width: '220px', marginLeft: '37px', marginBottom: '20px'}}>
                <Radio.Group
                  defaultValue="Login"
                  buttonStyle="solid"
                  onChange={onChange}
                  value={section}
                >
                  <Radio.Button value="Login">Login Here</Radio.Button>
                  <Radio.Button value="Register">Register Here</Radio.Button>
                </Radio.Group>
              </Row>

              <Form
                name="login-form"
                form={form}
                onFinish={section === "Login" ? onLogin : onRegister}
                labelAlign="left"
                style={{ 
                    width: '280px'
                 }}
                labelCol={{
                  span: 4,
                }}
                labelWrap={{
                  span: 14,
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                  />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={isRegisterLoading} block>
                  {section === "Login" ? "Login" : "Register"}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
