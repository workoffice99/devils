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

export default function Partners() {
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
            <div class="carousel-item" data-bs-interval="3000">
              <div class="user-photo ">
                <img
                  src="./assets/logo-company.png"
                  alt="testimonial slider"
                  style="height:32px; width:auto;"
                />
              </div>
              <div class="slider-caption mt-3 text-dark">
                <p class="fs-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <figcaption class="mt-3 fs-6 text-dark font-weight-bold text-dark">
                  <b>Company Name</b>
                </figcaption>
              </div>
            </div>
          </div>
          <div>
            <div class="carousel-item" data-bs-interval="3000">
              <div class="user-photo ">
                <img
                  src="./assets/logo-company.png"
                  alt="testimonial slider"
                  style="height:32px; width:auto;"
                />
              </div>
              <div class="slider-caption mt-3 text-dark">
                <p class="fs-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <figcaption class="mt-3 fs-6 text-dark font-weight-bold text-dark">
                  <b>Company Name</b>
                </figcaption>
              </div>
            </div>
          </div>
          <div>
            <div class="carousel-item" data-bs-interval="3000">
              <div class="user-photo ">
                <img
                  src="./assets/logo-company.png"
                  alt="testimonial slider"
                  style="height:32px; width:auto;"
                />
              </div>
              <div class="slider-caption mt-3 text-dark">
                <p class="fs-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <figcaption class="mt-3 fs-6 text-dark font-weight-bold text-dark">
                  <b>Company Name</b>
                </figcaption>
              </div>
            </div>
          </div>

          <div>
            <div class="carousel-item" data-bs-interval="3000">
              <div class="user-photo ">
                <img
                  src="./assets/logo-company.png"
                  alt="testimonial slider"
                  style="height:32px; width:auto;"
                />
              </div>
              <div class="slider-caption mt-3 text-dark">
                <p class="fs-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <figcaption class="mt-3 fs-6 text-dark font-weight-bold text-dark">
                  <b>Company Name</b>
                </figcaption>
              </div>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </div>
  );
}
