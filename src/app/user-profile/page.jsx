import React from "react";
import "./user-profile.css";

export default function page() {
  return (
    <section className="user_profile">
      <div className="container py-5">
        <div className="row profile_flex ">
          <div className="col-lg-9">
            <div className="profile_img_div py-5">
              <img src="/assets/profile.png" alt="user image" />
              <h3>Mohsin Raza</h3>
              <p id="city">Lahore</p>
            </div>
            <div className="flex_div mb-3 d-flex align-items-center">
              <h3>Email Address:</h3>
              <p>dummytext@gmail.com</p>
            </div>
            <div className="flex_div mb-3 d-flex align-items-center">
              <h3>Phone Number: </h3>
              <p>+92 3*********</p>
            </div>
            <div className="flex_div mb-3 d-flex align-items-center">
              <h3>Current Address: </h3>
              <p>123 Main Street, Gulberg, Lahore, Punjab, Pakistan</p>
            </div>
            <button className="new_address_btn mt-5">Add New Address</button>
          </div>
        </div>
      </div>
    </section>
  );
}
