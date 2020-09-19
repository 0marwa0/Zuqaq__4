import { Button } from "antd";
import antd from "antd";
import { Layout, Breadcrumb,Carousel } from "antd";
import Slider from "react-slick";
const { Header, Footer, Sider, Content } = Layout;
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";
import "../../Styles/Filter.less";
import { RightOutlined,LeftOutlined } from "@ant-design/icons";
import FilterButtons from "../../components/carousel";
const { Card } = antd;
const { Meta } = Card;
 const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
const fitlerImtes = [
  { title: "Wearables" },
  { title: "Hoodle" },
  { title: "Male T-shirt" },
  { title: "Female T-shirt" },
  { title: "Kids" },
  { title: "Dresses" },
  { title: "Skrits" },
];
const items = [
  {
    id: "1",
    src: "../static/images/t1.jpg",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "2",
    src: "../static/images/t2.jpg",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "3",
    src: "../static/images/t3.jpg",
    size: "L",
    title: "Baghdad",
    color: "White",
  },
  {
    id: "4",
    src: "../static/images/t4.jpg",
    size: "S",
    title: "WonderWomen",
    color: "Black",
  },
  {
    id: "5",
    src: "../static/images/t5.jpg",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "6",
    src: "../static/images/t6.jpg",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
  {
    id: "7",
    src: "../static/images/t7.jpg",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "8",
    src: "../static/images/t8.jpg",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "9",
    src: "../static/images/t9.jpg",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
];
const Butns=({css})=>{
  return<Slider  {...settings}>
 <Button
              key={1}
              size="large"
            id="card"
              style={css}
            >
             one 
            </Button>
             <Button
              key={1}
              size="large"
                id="card"
          style={css}
              
            >
             tow
            </Button>
             <Button
              key={1}
              size="large"
            id="card"
              style={css}
            >
           three
            </Button>
             <Button
              key={1}
              size="large"
          id="card"
              style={css}
            >
           four
            </Button>
             <Button
              key={1}
              size="large"
            id="card"
              style={css}
            >
            five
            </Button>
             <Button
              key={1}
              size="large"
            id="card"
              style={css}
            >
           six
            </Button>
             <Button
              key={1}
              size="large"
            id="card"
              style={css}
            >
            seven 
            </Button>


  </Slider>
}
export default class Filter extends React.Component {
  state={
     currentCard: 0,
      position: 0,
      cardStyle: {
        transform: "translateX(0px)",
         padding: "5px 70px",
                fontWeight: "500",
                margin:"0 5px"
      },
      width: 0,
      count: 0,
    margin:""
  }



 









 render(){
   let css=this.state.cardStyle
  return (
    <div className="filter_page">
      <div className="filter_head">
        
          {/* <div className="fa_wrapper1"
     
           >
<LeftOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />          </div> */}
        

     
<FilterButtons/>          {/* <div className="fa_wrapper2" 
           
          >
            <RightOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div> */}
      
      </div>
      <div className="card_wrapper">
        {items.map((item, i) => {
          return (
            <Card
              hoverable
              key={i}
              style={{
                overflow: "hidden",
                width: "100%",
                flex: "none",
                borderRadius: 5,
                height: "85%",
                 margin:0,
            padding:0
              }}
              cover={
                <img
                  alt="item"
                  width="100%"
                  display="block"
                  border-radius="30px"
                  height="auto"
                  border="none"
                  style={ { objectfit:"cover"}}
                
                  src={item.src}
                />
              }
            >
              {/* <Meta title={item.title} /> */}
              <div className="item_footer">
                <p>{item.color} </p> <span>{item.size}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}}


