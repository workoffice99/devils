import React from "react";
import "./Social.css";
import Go from "../../Assets/next.png";

export default function Social() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 social-media">
          <span className="text-white fs-1 text-bold">
            Get inspired from our Instagram
          </span>
          <p className="text-white fs-5">
            If you use the hashtag #SAVETASMANIANDEVILS on Instagram, well
            spotlight you.
          </p>
          <div className="d-flex col-12">
            <div className="text-white">
              <p>Check it out</p>
            </div>
            <div>
              <img
                src={Go}
                className="ml-4"
                width="40px"
                height="auto"
                Style="margin-left: 2rem;"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex  justify-content-between">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <h2>Stay updated with our updates about NFT and other updates</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="py-20 h-screen bg-gray-300 px-2">
            <div class="max-w-md mx-auto rounded-lg overflow-hidden ">
              <div class="md:flex">
                <div class="w-full p-3">
                  <div class="relative">
                    <input
                      type="text"
                      class=" px-4 py-3 border border-dark border-start-0 border-end-0 border-top-0 rounded-md "
                      name=""
                    />
                    <button
                      className="h-50 rounded bg-black absolute  text-sm right-2 px-3 text-white"
                      Style="height:50px !important;border-radius:15px !important;"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
