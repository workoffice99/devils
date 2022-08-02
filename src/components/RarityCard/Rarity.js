import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Photo from "../../Assets/Rarity1.jpeg";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Team() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
          <span>MOST RARE CATEGORIES OF DIGI DEVILS CLUB</span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px;padding-left:0; ">
          Rarity
        </div>
      </div>
      <div className="row">
        <Carousel responsive={responsive}>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper">
                <img src={Photo} class="d-block w-100" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Ancient</h5>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper">
                <img
                  src={Photo}
                  class="d-block "
                  width="100%"
                  height="auto"
                  alt="..."
                />{" "}
              </div>
              <div class="card-body text-center ">
                <h5 class="card-title">Legendary</h5>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper">
                <img src={Photo} class="d-block w-100" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Epic</h5>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper">
                <img src={Photo} class="d-block w-100" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title ">Rare</h5>
              </div>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </div>
  );
}
