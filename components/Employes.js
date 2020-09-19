import { Button, Checkbox } from "antd";
import antd from "antd";
import { Typography } from "antd";
import SidePuPop from "../components/sidePoup";
const { Text } = Typography;
import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
const { Table, Card, Row, Col, Tag } = antd;

const columns = [
  {
    title: "#",
    dataIndex: "#",
  },
  {
    title: "FullName",
    dataIndex: "FullName",
  },
  {
    title: "Type",
    dataIndex: "Type",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          console.log(tag, "per one");
          let color = tag === "Receipt" ? "green" : "orange";
          if (tag === "loser") {
            color = "orange";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Data",
    dataIndex: "Data",
  },
  {
    title: "Branch",
    dataIndex: "Branch",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
  },
  {
    title: "Discount",
    dataIndex: "Discount",
  },
  {
    title: "",
    dataIndex: "",
    render: () => (
      <BsThreeDots style={{ cursor: " pointer" }} color="rgb(161, 158, 158)" />
    ),
  },
];

const data = [
  {
    key: "1",
    Type: ["Receipt"],
    FullName: "Ail mohmmed",
    Data: "Mon,August 31,2020",
    Branch: "Baghdad Mall",
    Amount: "62,500IQD",
    Discount: "20%",
  },
  {
    key: "1",
    Type: ["Invoice"],
    FullName: "Ail mohmmed",
    Data: "Tue,June 20,2020",
    Branch: "The Station",
    Amount: "30,500IQD",
    Discount: "0%",
  },
];
{
}
const Employes = () => {
  const [show, setShow] = useState(false);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const showPopup = () => {
    setShow(!show);
    console.log("showwho wofwo");
  };
  return (
    <div className="content" style={{ marginLeft: "225px" }}>
      <div className="content_innefr">
        <Row
          style={{
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Col
            style={{
              maxWidth: "100%",
              flex: "1 0 100px",
              display: "flex",

              flexDirection: "column",
            }}
          >
            <div>
              <Button
                type="primary"
                style={{
                  marginBottom: "15px",
                  backgroundColor: "#1890ff",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={showPopup}
              >
                <FaPlus style={{ marginRight: "7px" }} />
                New Transaction
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              style={{ height: "100%" }}
              rowClassName="table_row"
              onChange={onChange}
              className="table"
              pagination={{
                total: 20,
                style: {
                  display: "flex",

                  color: "gray",
                  //   padding: "0 20px",
                },
                // pageSizeOptions: ["10", "20", "50"],

                showTotal: (total) => `View search for 1 from 2 search we got.`,

                // showSizeChanger: true,
              }}
            />
          </Col>
          <Col
            style={{
              maxWidth: "100%",
              flex: "0 0 40px",
              display: "flex",
              flexDirection: "column",
            }}
          ></Col>
        </Row>
        ,{show ? <SidePuPop handleClose={showPopup} /> : null}
      </div>
    </div>
  );
};

export default Employes;
