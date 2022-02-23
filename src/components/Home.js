import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Card, Button, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";
import { Header } from "../components";
const { Title, Text } = Typography;

const Home = () => {
    const [overlayLoading, setOverlayLoading] = useState(false);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setOverlayLoading(true);
        try {
            const { data } = await axios.get(process.env.REACT_APP_GET_USERS);
            setUsersData(data.reverse());
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        setOverlayLoading(false);
    };

    const deleteUser = async (user) => {
        try {
            const { data } = await axios.delete(
                process.env.REACT_APP_DELETE_USER,
                {
                    params: {
                        email: user.email,
                    },
                }
            );

            if (data.status === "Deleted") {
                message.success(data.message);
                getData();
            } else {
                message.error(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <LoadingOverlay active={overlayLoading} spinner>
            <div className="home__container">
                <Header />
                <Row gutter={[10, 10]}>
                    {usersData?.map((user, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <Card style={{ boxShadow: "0 0 15px #eee" }}>
                                <Button
                                    onClick={() => deleteUser(user)}
                                    type="primary"
                                    shape="circle"
                                    icon={<DeleteOutlined />}
                                    className="home__data-item-btn"
                                />
                                <Title level={4}>
                                    {user.fist_name || "Dummy Text"}
                                </Title>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </LoadingOverlay>
    );
};

export default Home;
