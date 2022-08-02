import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Photo from "../../Assets/partner2 (2).jpeg";
import Photo1 from "../../Assets/partner2 (1).jpeg";
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
            <div class="card m-5 border-0">
              <div class="img-wrapper d-flex justify-content-center align-content-center">
                <img src={Photo} width="auto" height="200px" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Aussie Ark</h5>
                <p class="card-text">
                  Aussie Ark was established in 2011 as ‘Devil Ark’, with a
                  focus on saving the iconic Tasmanian devil from extinction.
                  Since then and due to overwhelming success, the role of the
                  organisation has expanded, and now has vision of creating a
                  long-term future for our threatened Australian species. Aussie
                  Ark will secure wild sanctuaries to conserve our native
                  wildlife, free from unnatural predation. Aussie Ark is an
                  adaptive, innovative, private organisation, committed to
                  changing the trajectory declining species. Aussie Ark is an
                  incorporated association, registered environmental
                  organisation and charitable institution under the Australian
                  Charity and Not-for-profit Commission.
                </p>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <div class="card m-5 border-0">
              <div class="img-wrapper d-flex align-items-center justify-content-center">
                <img src={Photo1} width="auto" height="200px" alt="..." />{" "}
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Devils Cradle</h5>
                <p class="card-text">
                  A world class wildlife conservation facility at Tasmania’s
                  premier wilderness destination. The spectacular and pristine
                  wilderness of Cradle Mountain is home to the mysterious and
                  secretive Tasmanian Devil. Devils @ Cradle is a unique
                  Tasmanian conservation sanctuary located at the entrance to
                  the spectacular World Heritage listed Cradle Mountain National
                  Park. Whilst we concentrate primarily on the Tasmanian devil,
                  the sanctuary is also home to the closely related Spotted-tail
                  and Eastern quolls. Tasmania’s three largest carnivorous
                  marsupials are all now threatened in one way or another in the
                  wild.
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
