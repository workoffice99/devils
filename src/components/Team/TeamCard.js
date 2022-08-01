import React from "react";
import "./Team.css";

function TeamCard(props) {
  return (
    <div className="raritycard m-6  ">
      <div className="icon-card">
        <figure className="image m-3 ">
          <img className="is-rounded" src={props.image} />
        </figure>
      </div>
      <p className="subtitle">{props.rarity}</p>
      <p className="title-res mobile-special">{props.name}</p>
      <p className="paragraph-rarity">{props.info}</p>
    </div>
  );
}

export default TeamCard;
