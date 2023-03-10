import React, { useState } from "react";
import "./connectwall.css";
import { RxCross1 } from "react-icons/rx";
import { TbMathGreater } from "react-icons/tb";
import metamasklogo from "../images/image 66.png";
import wallConnect from "../images/image 69.png";
const connectwallet = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button className="navbtn" onClick={toggleModal}>
        Connect Wallet
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="content-box">
              <div className="modal-content">
                <p>Connect Wallet</p>
                <button onClick={toggleModal}>
                  <RxCross1 />
                </button>
              </div>
              <span></span>
              <div className="choosewallet">
                <p className="choose">Choose your preferred wallet:</p>
                <div className="wallet">
                  <div className="wallet-name metamask">
                    <div>
                      <img src={metamasklogo} alt="" />
                      <a href="">MetaMask</a>
                    </div>
                    <TbMathGreater />
                  </div>
                  <div className="wallet-name wallcon">
                  <div>
                      <img src={wallConnect} alt="" />
                      <a href="">Wallet Connect</a>
                    </div>
                    <TbMathGreater />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default connectwallet;
