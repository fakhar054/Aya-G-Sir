"use client";
import React, { useState } from "react";
import "./button_comp.css";
import Card from "../Personal-card/Card";
import CompanyCard from "../compnies-card/CompanyCard";

export default function ButtonComp() {
  const [showCompnies, setshowCompnies] = useState(true);
  const handleCompnies = () => {};
  return (
    <div className="container">
      <div className="button_comp">
        <div className="mb-3 btn_div d-flex align-items-center justify-content-center gap-3 py-3 px-4">
          <div className="single_btn py-2 px-3 individual">
            <h3>Individuals</h3>
          </div>
          <div
            className="single_btn companies py-2 px-3"
            onClick={handleCompnies}
          >
            <h3>Companies</h3>
          </div>
        </div>
        {showCompnies ? (
          <>
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </>
        ) : (
          <div className="card_wrapper_div">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}
      </div>
    </div>
  );
}
