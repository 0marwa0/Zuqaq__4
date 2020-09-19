import "../../Styles/SidePopup.less";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import antd from "antd";
const { Table, Card, Row, Col, Tag } = antd;
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
  render() {
    const columns = [
      {
        title: "#",
        dataIndex: "num",
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
    {
    }
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
                <u style={{ color: "blue" }}>Change to Invoice</u>{" "}
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
                  padding: "40px",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "15px" }}>Costumer Info</p>
              </Col>
              <Col
                style={{
                  padding: "40px",

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
                      display: "flex",

                      color: "gray",
                      //   padding: "0 20px",
                    },
                    // pageSizeOptions: ["10", "20", "50"],

                    showTotal: (total) =>
                      `View search for 1 from 2 search we got.`,

                    // showSizeChanger: true,
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default SidePuPop;
