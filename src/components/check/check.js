import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Photo from "../../Assets/Rarity1.jpeg";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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
          <span>WE ARE NOT ALONE</span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px;padding-left:0; ">
          Partners
        </div>
      </div>
      <div className="row">
        <Carousel responsive={responsive}>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper d-flex justify-content-center align-content-center">
                <img src={Photo} width="200px" height="200px" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">part ner name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper">
                <img src={Photo} width="200px" height="200px" alt="..." />{" "}
              </div>
              <div class="card-body text-center ">
                <h5 class="card-title">part ner name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper d-flex align-items-center justify-content-center">
                <img src={Photo} width="200px" height="200px" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">part ner name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div class="card m-5">
              <div class="img-wrapper d- flex justify-content-center">
                <div>
                  <img src={Photo} width="200px" height="200px" alt="..." />{" "}
                </div>
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">part ner name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </div>
  );
}
