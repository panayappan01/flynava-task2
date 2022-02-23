import React from "react";
import { Empty } from "antd";
import images from "../assets/images";

const PageNotFound = () => {
    return (
        <div className="pagenotfound__container">
            <Empty
                image={images.pagenotfound}
                imageStyle={{
                    height: 200,
                }}
                description={<h1>Page not found</h1>}
            ></Empty>
        </div>
    );
};

export default PageNotFound;
