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
      {/* <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h1>still working on it ...</h1>

      </div> */}

      {/* <div className="Main_container">
        <Filter />
        <SideWindow />
      </div>
      <Layout>
        <Footer
          style={{
            width: "100%",
            height: "12%",
           
            position: "fixed",
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#24292e",
            // #24292e
            zIndex: "9999",
            
            padding:"0 30px"
          }}
        >
          <div className="footer">
            <span>
              <BsList
                color="white"
                style={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  marginRight: "5px",
                }}
              />
              <span>Home</span>
            </span>
            <Button style={{backgroundColor:"#3b86ff",color:"white",border:"none"}}>checkout</Button>
          </div>
        </Footer>
      </Layout> */}
      {/* https://codesandbox.io/s/async-breeze-jxsd4?file=/src/index.js */}
      {/* {show ? <div className="progres_bar"></div> : null} */}
      <NavBar fun={showProgrss} />
      <Slidtable fun={showProgrss} />
    </div>
  );
};
export default index;
