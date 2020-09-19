import "../Styles/Filter.less";
import { Layout, Breadcrumb } from "antd";

const { Header, Footer, Sider, Content } = Layout;
import { GiDividedSpiral } from "react-icons/gi";
import antd from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const { Menu, Dropdown, Button } = antd;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
function index() {
  return (
    // <Layout>
    //   <Sider
    //     style={{
    //       zIndex: 999,
    //     }}
    //   >
    <div className="window_page">
      <div className="window_title">
        {" "}
        <p>Items List </p> <BsThreeDots style={{ marginTop: "-10px" }} />
      </div>
      <div className="item_container">
        <div className="window_item">
          <img width="90px" height="auto" src="../static/images/t6.jpg" />
          <div className="window_text">
            <span>
              Araq nas , white <span style={{ color: "#c5c7c9" }}>-FS </span>
            </span>
            <div>45,000 IQD</div>
          </div>

          <div className="window_ctrl">
            <span className="ai_window">
              <AiOutlineMinus />
            </span>
            <div className="item_num">10</div>
            <span className="ai_window">
              <AiOutlinePlus />
            </span>
          </div>
          <div>
            <GiDividedSpiral
              size="20"
              style={{ marginLeft: "20px" }}
              color="rgb(89, 161, 228)"
            />
          </div>
        </div>

        <div className="window_item">
          <img width="90px" height="auto" src="../static/images/t5.jpg" />
          <div className="window_text">
            <span>
              Araq nas , white <span style={{ color: "#c5c7c9" }}>-FS </span>
            </span>
            <div>45,000 IQD</div>
          </div>

          <div className="window_ctrl">
            <span className="ai_window">
              <AiOutlineMinus />
            </span>
            <div className="item_num">20</div>
            <span className="ai_window">
              <AiOutlinePlus />
            </span>
          </div>
          <div>
            <GiDividedSpiral
              size="20"
              style={{ marginLeft: "20px" }}
              color="rgb(201, 194, 194)"
            />
          </div>
        </div>
      </div>
      <div className="window_footer">
        <div className="discount">
          <Dropdown overlay={menu}>
            <Button style={{ textAlign: "left", width: "100%" }}>
              Discount <DownOutlined style={{ float: "right" }} />
            </Button>
          </Dropdown>
        </div>
        <div className="check">
          <ul>
            <li>Sub-total:</li>
            <li>Disocunt:</li>
            <li>Tax</li>
          </ul>
          <ul>
            <li>1.350,000 IQD</li>
            <li>000 IQD</li>
            <li>000 IQD</li>
          </ul>
        </div>
        <div className="window_title">
          {" "}
          <p>Total:</p>
          <p className="price">1,350,000 IQD</p>
        </div>
      </div>
    </div>
    //   </Sider>
    // </Layout>
  );
}

export default index;
