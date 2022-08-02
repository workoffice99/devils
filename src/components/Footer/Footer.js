import React from "react";
import Instagram from "../../Assets/Instagram.svg";
import Face_Book from "../../Assets/Face-Book.svg";
import Twitter from "../../Assets/twitter.svg";
import Logo from "../../Assets/Logo1.png";

export default function Footer() {
  return (
    <div class="container">
      <footer>
        <div class="row"></div>
        <div class="col-12 col-lg-4 d-flex flex-column d-lg-flex flex-lg-row justify-content-lg-between">
          <div class="d-flex align-content-center ">
            <a href="/">
              <img src={Logo} width="auto" height="50px" />
            </a>
          </div>
          <div class="col-12 col-lg-4 d-flex justify-content-lg-center align-content-center ">
            <a href="/">
              <span class="text-muted">Help</span>
            </a>
            <a href="/">
              <span class="text-muted">Contact Us</span>
            </a>
            <a href="/">
              <span class="text-muted">Privacy Policy</span>
            </a>
          </div>
          <div class="col-12  col-lg-4 d-flex justify-content-lg-end align-content-center">
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
