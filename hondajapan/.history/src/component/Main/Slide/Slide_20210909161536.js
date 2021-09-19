import React, { Component } from "react";
import Images from "../../../constants/Images";

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
              src={Images.SLIDE.SL_IMG2}
              stt={1}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          <a href="javascript:void(0)">
            <img
              src={Images.SLIDE.SL_IMG3}
              stt={2}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          <a href="javascript:void(0)">
            <img
              src={Images.SLIDE.SL_IMG4}
              stt={3}
              className="img-main"
              style={{ display: "none" }}
            />
          </a>
          <a href="javascript:void(0)">
            <img
              src={Images.SLIDE.SL_IMG5}
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
              <img src={Images.SLIDE.SL_IMG1} alt="" className="img-show" />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
          <div className="list-image">
            <a href="javascript:void(0)">
              <img src={Images.SLIDE.SL_IMG2} alt="" className="img-show" />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
          <div className="list-image">
            <a href="javascript:void(0)">
              <img src={Images.SLIDE.SL_IMG3} alt="" className="img-show" />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
          <div className="list-image">
            <a href="javascript:void(0)">
              <img src={Images.SLIDE.SL_IMG4} alt="" className="img-show" />
            </a>
            {/* <img src="images/icon/line.png" class="img-line"> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Slide;
