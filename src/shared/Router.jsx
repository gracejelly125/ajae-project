import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";
import Mypage from "../pages/Mypage";
import Detail from "../pages/Detail";
import Content from "../pages/Content";
import About from "../pages/About";
import List from "../pages/List";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="content" element={<Content />} />
          <Route path="list" element={<List />} />
          <Route path="list/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
