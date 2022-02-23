import React from "react";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="home__header">
            <Title level={2}>USER MANAGEMENT</Title>
            <Button onClick={() => navigate("/add-user")} type="primary">
                ADD USER
            </Button>
        </div>
    );
};

export default Header;
