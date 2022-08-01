import React from "react";
import CountUp from "react-countup";
import Logo from "../../Assets/Logo.png";

export default function Progressive() {
  return (
    <div
      className="bg-danger  text-white text-bold fs-3  p-3"
      // Style="border-radius: 15px 50px;"
    >
      <div className="fw-bold">
        <CountUp prefix="Population " delay={1} end={25000} duration={3} />
      </div>
    </div>
  );
}
