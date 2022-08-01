import React from "react";
import NftImg from "./../../Assets/nftArt.png";

export default function fundingText() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-12 col-lg-12" Style="font-size: 20px">
          <span>FUND US! TO PROTECT OUR HERITAGE </span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px">
          Fund Us By Buying nft
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-lg-6">
          <span className="">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pellentesque pretium sapien at rutrum.
            </h4>{" "}
            Phasellus sit amet ipsum congue, aliquet quam ut, laoreet nulla.
            Integer pellentesque, sapien et gravida cursus, dolor felis iaculis
            erat, in mattis eros justo vel arcu. Ut venenatis massa vel augue
            dignissim convallis. Vivamus vitae felis viverra., hendrerit leo a,
            efficitur ipsum. Donec sit amet metus vitae tellus bibendum
            <br />
            eleifend. Fusce iaculis sodales nulla a pellentesque. Nullam a
            aliquet ex. Duis eu tempus odio. Phasellus varius mattis diam in
            dapibus. Maecenas non lorem ullamcorper, luctus est eget, accumsan
            purus. Etiam vehicula tempor mi in ullamcorper. Mauris mattis
            dapibus commodo. Nulla id libero et quam pulvinar dictum. Donec
            dapibus congue ligula laoreet tristique.
          </span>
        </div>
        <div class="col-12 col-lg-6 container">
          <img src={NftImg} width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
}
