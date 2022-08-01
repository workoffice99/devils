import React from "react";
import CardImg from "./../../Assets/Rarity1.jpeg";

export default function Rarity() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
          <span>MOST REAR CATEGORIES DIGI DEVILS CLUB</span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px;padding-left:0; ">
          Rarity
        </div>
      </div>
      <div className="row justify-content-between mt-3">
        <div class="card col-12 col-sm-12 col-md-3">
          <img class="card-img-top" src={CardImg} alt="" Style="width:100%;" />
          <div class="card-body">
            <p class="card-text">
            Ancient
            </p>
          </div>
        </div>
        <div class="card col-12 col-sm-12 col-md-3">
          <img class="card-img-top" src={CardImg} alt="" Style="width:100%;" />
          <div class="card-body">
            <p class="card-text">
            Epic
            </p>
          </div>
        </div>
        <div class="card col-12 col-sm-12 col-md-3">
          <img class="card-img-top" src={CardImg} alt="" Style="width:100%;" />
          <div class="card-body">
            <p class="card-text">
            Legendary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
