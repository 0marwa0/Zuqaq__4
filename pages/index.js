import { Layout, Menu, Breadcrumb, Button } from "antd";

import { BsList } from "react-icons/bs";
const { Header, Footer, Sider, Content } = Layout;
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Filter from "../pages/Filter";

const { SubMenu } = Menu;

import Link from "next/link";
import "../Styles/style.less";
import SlideNav from "../components/SlideNav";
import SideWindow from "../pages/SideWindow.js";
import NavBar from "../components/NavBar";
import { useState } from "react";
import {} from "../components/Slidtable.js";
import FilterButtons from "../components/carousel.js";
import Slidtable from "../components/Slidtable";
// const { Layout, Menu, Breadcrumb } = antd;
// const { UserOutlined, LaptopOutlined, NotificationOutlined } = icons;

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
const index = () => {
  const [show, setshow] = useState(false);
  const showProgrss = () => {
    setInterval(() => {
      setshow(true);
    }, 100);

    return setshow(false);
  };

  return (
    <div>
      <NavBar fun={showProgrss} />
      <Slidtable fun={showProgrss} />
    </div>
  );
};
export default index;
