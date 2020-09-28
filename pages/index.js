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

import "../Styles/style.less";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Slidtable from "../components/Slidtable";

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
