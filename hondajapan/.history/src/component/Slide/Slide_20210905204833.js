import React, { Component } from "react";
import Images from "../../constants/Images";

import "./Slide.scss";
export class Slide extends Component {
  render() {
    return (
      <section className="mainslide">
        <div className="mainslide-img">
          <a href="javascript:void(0)">
            <img src={Images.SLIDE.SL_IMG1} stt={0} className="img-main" />
          </a>
          <a href="javascript:void(0)">
            <img
              src="images/imageshow/img5.jpg"
              stt={1}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          <a href="javascript:void(0)">
            <img
              src="images/imageshow/img6.jpg"
              stt={2}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          <a href="javascript:void(0)">
            <img
              src="images/imageshow/img7.jpg"
              stt={3}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          <a href="javascript:void(0)">
            <img
              src="images/imageshow/img8.jpg"
              stt={4}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          {/* <img src="images/icon/line.png" class="img-line"> */}
          <div className="btn-next">
            <i className="fas fa-arrow-circle-right" />
          </div>
          <div className="btn-prev">
            <i className="fas fa-arrow-circle-left" />
          </div>
        </div>
        <div className="list">
          <div className="list-image">
            <a href="javascript:void(0)">
              <img
                src="images/imageshow/img5.jpg"
                alt=""
                className="img-show"
              />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
          <div className="list-image">
            <a href="javascript:void(0)">
              <img
                src="images/imageshow/img6.jpg"
                alt=""
                className="img-show"
              />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
          <div className="list-image">
            <a href="javascript:void(0)">
              <img
                src="images/imageshow/img7.jpg"
                alt=""
                className="img-show"
              />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
          <div className="list-image">
            <a href="javascript:void(0)">
              <img
                src="images/imageshow/img8.jpg"
                alt=""
                className="img-show"
              />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Slide;
