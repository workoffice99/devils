import React from "react";
import Instagram from "../../Assets/Instagram.svg";
import Face_Book from "../../Assets/Face-Book.svg";
import Twitter from "../../Assets/twitter.svg";
import Logo from "../../Assets/Logo1.png";

export default function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-12 col-md-6 col-lg-6  d-flex align-items-center">
          <a href="/" class="my-1 mb-3 me-2 mb-md-0  text-decoration-none lh-1">
            <img src={Logo} class="bi" width="auto" height="50px" />
          </a>

          <a href="/" class="my-3 me-2 mb-md-0  text-decoration-none lh-1">
            <span class="text-muted">Help</span>
          </a>
          <a href="/" class="my-3 me-2 mb-md-0  text-decoration-none lh-1">
            <span class="text-muted">Contact Us</span>
          </a>
          <a href="/" class="my-3 me-2 mb-md-0  text-decoration-none lh-1">
            <span class="text-muted">Privacy Policy</span>
          </a>
        </div>

        <ul class="nav col-12 col-md-6 col-lg-6  align-items-lg-stretch d-flex justify-content-md-end justify-content-center  justify-content-center  list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <img src={Instagram} class="bi" width="24" height="24" />
              {/* <use xlink:href="#twitter"></use> */}
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <img src={Face_Book} class="bi" width="24" height="24" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <img src={Twitter} class="bi" width="24" height="24" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
