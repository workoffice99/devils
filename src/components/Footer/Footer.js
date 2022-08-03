import React from "react";
import Instagram from "../../Assets/Instagram.svg";
import Face_Book from "../../Assets/Face-Book.svg";
import Twitter from "../../Assets/twitter.svg";
import Logo from "../../Assets/Logo1.png";

export default function Footer() {
  return (
    <div class="container">
      <footer>
        <div class="row">
          <div class="col-12 col-lg-6-flex flex-column d-lg-flex flex-lg-row justify-content-lg-between">
            <div class="d-flex justify-content-center ml-2 ml-lg-0 ">
              <a href="/">
                <img src={Logo} width="auto" height="50px" />
              </a>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-around justify-content-lg-between align-items-center ">
              <a class="text-decoration-none" href="/">
                <span class="text-muted  ">Help</span>
              </a>
              <a class="text-decoration-none" href="/">
                <span class="text-muted ">Contact Us</span>
              </a>
              <a class="text-decoration-none" href="/">
                <span class="text-muted">Privacy Policy</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex  justify-content-center align-content-center mr-2 ">
            <div>
              <span>
                <a class="text-muted" href="#">
                  <img src={Instagram} class="bi" width="24" height="24" />
                  {/* <use xlink:href="#twitter"></use> */}
                </a>
              </span>
            </div>
            <div>
              <span class="ms-3">
                <a class="text-muted" href="#">
                  <img src={Face_Book} class="bi" width="24" height="24" />
                </a>
              </span>
            </div>
            <div>
              <span class="ms-3">
                <a class="text-muted" href="#">
                  <img src={Twitter} class="bi" width="24" height="24" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
