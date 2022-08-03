import React from "react";
import { Button } from "react-bootstrap";
import BannerPic from "../../Assets/bannerPic.png";
import EndagerBar from "../../Assets/BannerTimeLine.png";
import ProgressBar from "../progressiveBar/Progressive";

export default function Banner() {
  return (
    <div className="container">
      <div className="row d-flex flex-column-reverse flex-lg-row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div>
            <span
              className="col-12 col-sm-12 col-md-12 col-lg-6"
              Style="font-size: 56px; font-weight:bold"
            >
              Let Us Save the <br /> Tasmanian Devil.
            </span>
          </div>
          <div className="col-12 col-lg-10  mt-3 border-white align-middle ">
            {" "}
            <ProgressBar />
          </div>

          <div className="col-12 col-sm-12 col-md-12">
            <span className="fs-5 fw-bold ">
              Continuing decline in area, Extent and/or
              <br />
              quality of habitat.
            </span>
          </div>

          <div className="mt-4">
            <span>
              IUCN Red List Added Tasmanian Devil as ENDANGERED Species
            </span>
          </div>
          <div className="col-12  mt-5">
            <img src={EndagerBar} height="110px" width="90%" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <img src={BannerPic} height="auto" width="100%" />
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row mt-2">
        <div className="d-flex flex-column-reverse flex-lg-row ">
          Tasmanian Devil has most recently been assessed for The IUCN Red List
          of Threatened Species in 2008 and listed as Endangered.
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 fs-5 fw-bold p-2">
          Tasmanian Devil has most recently been assessed for The IUCN Red List
          of Threatened Species in 2008 and listed as Endangered.
        </div>
      </div>
    </div>
  );
}
