import "../../Styles/SidePopup.less";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import antd from "antd";
import icons from "@ant-design/icons";
import { FiPrinter } from "react-icons/fi";
import { FaStarOfLife } from "react-icons/fa";
import styled from "styled-components";
import { CalendarOutlined } from "@ant-design/icons";
const {
  Table,
  Card,
  Row,
  Col,
  DatePicker,
  Tag,
  Checkbox,
  Layout,
  Button,
  Input,
} = antd;
const { Footer } = Layout;
const { RangePicker } = DatePicker;
const Row1 = styled.div`
  display: grid;

  grid-template-columns: 0.5fr 0.5fr 0.8fr 0.8fr;
  gap: 15px;
`;
const Row2 = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 0.3fr 0.5fr;
  gap: 15px;
`;
const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

class SidePuPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClose = (e) => {
    if (this.nods.contains(e.target)) {
      return;
    }
    this.props.handleClose();
    // console.log(this.nods, "out overlay");
  };
  onChange = () => {};
  render() {
    const columns = [
      {
        title: "#",
        dataIndex: "num",
      },
      {
        title: "",
        dataIndex: "",
        render: (value, record, rowIndex) => (
          <Checkbox
            onChange={() => {
              console.log("");
            }}
          />
        ),
      },
      {
        title: "Item Name",
        dataIndex: "ItemName",
      },
      {
        title: "Size",
        dataIndex: "Size",
      },
      {
        title: "Price",
        dataIndex: "Price",
      },
      {
        title: "Quantity",
        dataIndex: "Quantity",
      },

      {
        title: "Discount",
        dataIndex: "Discount",
      },
      {
        title: "",
        dataIndex: "",
        render: () => (
          <AiOutlineClose
            style={{ cursor: " pointer" }}
            color="rgb(161, 158, 158)"
          />
        ),
      },
    ];

    const data = [
      {
        key: "1",
        num: 1,
        ItemName: "Baghdadi Red -HD",
        Size: "Mon,August 31,2020",
        Price: "62,500 IQD",
        Quantity: "2",
        Discount: "",
      },
      {
        key: "1",
        num: 2,
        ItemName: "Araq nas-MS",
        Size: "Mon,August 31,2020",
        Price: "35,500 IQD",
        Quantity: "3",
        Discount: "",
      },
    ];

    return (
      <div onClick={(e) => this.handleClose(e)} className="SideOverlay">
        <div
          className="SideModal"
          ref={(nods) => {
            this.nods = nods;
          }}
        >
          <div className="Modal_inner_content">
            <div className="sideNav_content">
              <p style={{ fontSize: "19px" }}> New Receipt</p>
              <span
                style={{
                  display: "flex",

                  gap: "20px",
                }}
              >
                <u style={{ color: "#90baff" }}>Change to Invoice</u>{" "}
                <p>
                  {" "}
                  <AiOutlineClose
                    style={{ cursor: " pointer" }}
                    fontSize="20px"
                    margin="10px"
                    color="rgb(161, 158, 158)"
                  />
                </p>
              </span>
            </div>

            <Row
              style={{
                flex: "1 1 100px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Col
                style={{
                  padding: "15px 40px",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "16px" }}>Costumer Info</p>
                <Row style={{ width: "100%" }}>
                  <Row1>
                    <RowItem>
                      <span>
                        First Name <FaStarOfLife color="red" size={5} />{" "}
                      </span>
                      <Input
                        placeholder="First name"
                        style={{
                          borderRadius: "7px",
                          border: "1px solid #e8ebed",
                        }}
                      />
                    </RowItem>
                    <RowItem>
                      <span>
                        Last Name <FaStarOfLife color="red" size={5} />{" "}
                      </span>
                      <Input
                        placeholder="Last name"
                        style={{
                          borderRadius: "7px",
                          border: "1px solid #e8ebed",
                        }}
                      />
                    </RowItem>
                    <RowItem>
                      <span>E-mail </span>
                      <Input
                        placeholder="write customer e-mail"
                        style={{
                          borderRadius: "7px",
                          border: "1px solid #e8ebed",
                        }}
                      />
                    </RowItem>
                    <RowItem>
                      <span>Phone Number </span>
                      <Input
                        placeholder="(123)4657890"
                        style={{
                          borderRadius: "7px",
                          border: "1px solid #e8ebed",
                        }}
                      />
                    </RowItem>
                  </Row1>
                  <Row2>
                    <RowItem>
                      <span>Birth Date </span>
                      <Input
                        addonAfter={<CalendarOutlined />}
                        onChange={this.onChange}
                        style={{
                          borderRadius: "7px",
                          border: "1px solid #e8ebed",
                          backgroundColor: "red",
                        }}
                      />
                    </RowItem>
                    <RowItem>
                      <span>Address</span>
                      <Input
                        placeholder="Write customer address"
                        style={{
                          borderRadius: "7px",
                          border: "1px solid #e8ebed",
                        }}
                      />
                    </RowItem>
                  </Row2>
                </Row>
              </Col>
              <Col
                style={{
                  padding: "5px 40px",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "15px" }}>Items List</p>
                <Table
                  columns={columns}
                  dataSource={data}
                  style={{ height: "100%" }}
                  rowClassName="table_row"
                  className="table"
                  pagination={{
                    total: 20,
                    style: {
                      color: "gray",
                    },

                    // pageSizeOptions: ["10", "20", "50"],

                    showTotal: (total) => `    Before Discount : 540,000 IQD`,

                    // showSizeChanger: true,
                  }}
                />
              </Col>{" "}
              <div
                style={{
                  display: "flex",
                  padding: "40px",
                  height: "10%",
                  gap: "10px",
                  justifyContent: "flex-end",
                }}
              >
                <FiPrinter
                  color="#d6d9db"
                  size={21}
                  style={{ marginTop: "6px" }}
                />
                <Button style={{ backgroundColor: "#3b86ff", color: "white" }}>
                  Finsh Receipt
                </Button>
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePuPop;
