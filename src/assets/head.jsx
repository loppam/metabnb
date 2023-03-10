import React from "react";
import img1 from "../images/image 3.png";
import img2 from "../images/image 4.png";
import img3 from "../images/image 5.png";
import img4 from "../images/image 6.png";
const head = () => {
  return (
    <div className="head">
      <div className="head-text">
        <h1>
          Rent a <span>Place </span>away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="searchbox">
          <input type="search" placeholder="Search for location" />
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="head-img">
        <div className="img-combo">
          <div className="combo1">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="combo2">
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default head;
