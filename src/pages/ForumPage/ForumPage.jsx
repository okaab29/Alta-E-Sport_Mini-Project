import { Button, Card, Col, Form, Input, Row, Typography, message } from "antd";
import React, { useEffect } from "react";
import { LogoAlta } from "../../assets";
import "./forumPage.css";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POSTS, GET_POSTS } from "./query/forum-query";

const { Title, Paragraph } = Typography;

const ForumPage = () => {
    // Get Posts
    const {
        data: postsData,
        loading: isPostsLoading,
        error: postsError
    } = useQuery(GET_POSTS)
    // Add Posts
    const [addPost, {loading: loadingAddPost}] = useMutation(ADD_POSTS, {
        refetchQueries: [GET_POSTS]
    })

    const handleCancle = () => {

    }

    const onAdd = (values) => {
        const body = {
            ...values
        }
        addPost({
            variables: {
                object: {
                    ...body
                }
            },
            onError: (err) => {
                message.open({
                    type: 'error',
                    content: `${err?.message}`
                })
            },
            onCompleted: () => handleCancle(),
        })
    }

    useEffect(() => {
        if (postsError) {
            message.open({
                type: 'error',
                content: `${postsError?.message}`
            })
        }
    }, [postsError])

    const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


  return (
    <div>
      <Card style={{ backgroundColor: "#373739", margin: "0 70px" }}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <img src={LogoAlta} alt="Logo" className="logo-forum" />
          </Col>
          <Col span={18}>
            <div style={{ textAlign: "center" }}>
              <Title level={3} style={{ color: "#fff" }}>
                Welcome to Forum!
              </Title>
              <Paragraph style={{ color: "#fff", fontSize: "60px" }}>
                <span style={{ color: "#F37423" }}>Share</span> your{" "}
                <span style={{ color: "#F37423" }}>Fun</span> with other!
              </Paragraph>
            </div>
          </Col>
        </Row>
      </Card>
      <div className="container-forum">
        <div className="inner-container">
          <Title style={{ color: "white", marginTop: 0 }}>
            Make your Post!
          </Title>
          <Form
            onFinish={onAdd}
            style={{
              width: "800px",
            }}
            labelAlign="left"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter a title" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter a description" },
              ]}
            >
              <Input.TextArea placeholder="Description" />
            </Form.Item>
            <Button
                htmlType="submit"
                type="primary"
                loading={loadingAddPost}
            >
                Submit
            </Button>
          </Form>
        </div>
        {data.posts.map((post) => (
        <Card key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default ForumPage;
