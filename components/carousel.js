import React, { createRef } from "react";
import ReactDOM from "react-dom";
import { Carousel, Button } from "antd";

// import "./styles.css";
//  import "antd/dist/antd.css";

class FilterButtons extends React.Component {
    constructor(props) {
    super(props);
    this.carousel = createRef();
  }

  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  handleNext = () => this.carousel.current.next();

  handlePrev = () => this.carousel.current.prev();

  render() {
    return (
      <div className="App">
        <Carousel afterChange={this.onChange} ref={this.carousel}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Button onClick={this.handlePrev}>Previous</Button>
        <Button onClick={this.handleNext}>Next</Button>
      </div>
    );
  }
}

export default FilterButtons;