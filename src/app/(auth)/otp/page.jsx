import React from "react";
import "./otp.css";

export default function page() {
  return (
    <section className="otp auth_bg">
      <div className="container  p-4 bg_white">
        <h1 className="auth_heading">OTP Authentication</h1>
        <p className="auth_para mt-3">
          Enter the 6 digit OTP send to your +92 3** *******
        </p>
        <form>
          <br />
          <div className="input_group">
            <input type="text" className="input_box" />
            <input type="text" className="input_box" />
            <input type="text" className="input_box" />
            <input type="text" className="input_box" />
            <input type="text" className="input_box" />
            <input type="text" className="input_box" />
          </div>

          <br />
          <button className="sign_in">Verify Code</button>
        </form>
        <div className="logo_div mt-3">
          <img src="/assets/logo_header.png" alt="" className="logo" />
          <p id="head">AYA SIR G!</p>
          <p id="descri">YOUR TRUSTED EVERYWHERE</p>
        </div>
      </div>
    </section>
  );
}
