import React from "react";
import BannerPic from "../../Assets/bannerPic.png";
export default function Challenege() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
          <span>Why they can't live </span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px;padding-left:0;">
          They are Facing Challenges
        </div>
      </div>

      <div className="row">
        <div
          class="container  text-dark"
          Style="
    padding: 0px;"
        >
          <div id="testimonial-slider">
            <div class="container text-dark">
              <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="col-sm-12">
                  <div class="carousel-inner  py-5">
                    <div class="carousel-item active" data-bs-interval="3000">
                      <div class="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <img src={BannerPic} height="auto" width="100%" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <div>
                            <h1>What is Devil Facial Tumor Disease?</h1>
                            <span>
                              Devil facial tumour disease (DFTD) is an
                              aggressive non-viral, transmittable parasitic
                              cancer that affects Tasmanian Devils. Small
                              lesions or lumps, in and around the mouth, quickly
                              develop into large tumours on the face and neck
                              (and sometimes other parts of the body).
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item " data-bs-interval="3000">
                      <div class="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <img src={BannerPic} height="auto" width="100%" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <div>
                            <h1>What is Devil Facial Tumor Disease?</h1>
                            <span>
                              Devil facial tumour disease (DFTD) is an
                              aggressive non-viral, transmittable parasitic
                              cancer that affects Tasmanian Devils. Small
                              lesions or lumps, in and around the mouth, quickly
                              develop into large tumours on the face and neck
                              (and sometimes other parts of the body).
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item " data-bs-interval="3000">
                      <div class="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <img src={BannerPic} height="auto" width="100%" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <div>
                            <h1>What is Devil Facial Tumor Disease?</h1>
                            <span>
                              Devil facial tumour disease (DFTD) is an
                              aggressive non-viral, transmittable parasitic
                              cancer that affects Tasmanian Devils. Small
                              lesions or lumps, in and around the mouth, quickly
                              develop into large tumours on the face and neck
                              (and sometimes other parts of the body).
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
