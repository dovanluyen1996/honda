import React, { Component } from "react";
import "./Icon.scss";
import Images from "../../constants/Images";

class Icon extends Component {
  render() {
    return (
      <div>
        <div className="item-icon">
          <div className="item-iconline">
            <a href="javascript:voi(0)">
              <img src={Images.ICON.ICON_TWITTER} alt="ICON_TWITTER" />
            </a>
            <a href="javascript:voi(0)">
              <img src={Images.ICON.ICON_LINE} alt="ICON_LINE" />
            </a>
          </div>
          <div className="item-iconline">
            <a href="javascript:voi(0)">
              <img src={Images.ICON.ICON_LINE} alt="ICON_LINE" />
            </a>
            <a href="javascript:voi(0)">
              <img src={Images.ICON.ICON_CLIP} alt="ICON_CLIP" />
            </a>
            <a href="javascript:voi(0)">
              <img src={Images.ICON.ICON_RED} alt="ICON_RED" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Icon;
