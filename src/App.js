import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PageNotFound, AddNewUser } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="add-user" element={<AddNewUser />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
