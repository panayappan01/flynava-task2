import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const AddNewUser = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) => {
        if (loading) return;
        setLoading(true);
        values["username"] = `${values.fist_name} ${values.last_name}`;

        try {
            const { data } = await axios.post(
                process.env.REACT_APP_ADD_USER,
                values
            );

            if (data.status === "Success") {
                message.success(data.message);
                navigate("/", { replace: true });
            } else {
                message.error(data.message);
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <div className="addnewuser__container">
            <Title level={2}>Add New User</Title>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                style={{ maxWidth: "50%" }}
            >
                <Form.Item
                    label="Firstname"
                    name="fist_name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Firstname!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Lastname"
                    name="last_name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Lastname!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="PWD"
                    name="pwd"
                    rules={[
                        {
                            required: true,
                            message: "Please input your PWD!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                    Save User
                </Button>
            </Form>
        </div>
    );
};

export default AddNewUser;
