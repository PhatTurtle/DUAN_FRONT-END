import React from "react";
import Category from "../Category";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <img style={{width:'5%', scale:'.8'}} src="Logo1.png" alt="" />
          <section className="mt-2" style={{ width: "40%", marginLeft: "40%" }}>
            <div className="input-group mb-2">
              <input style={{width:'60%'}} type="text"className="form-control" placeholder="Tìm Kiếm Đê Mấy Con Chó ......."aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary"type="button"id="button-addon2" >
                Search
              </button>
            </div>
          </section>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Furniture E-Commerce
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Trang Chủ
                  </a>
                </li>
                <br />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Giới Thiệu
                  </a>
                </li>
                <br />
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sản Phẩm
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Sofa Ngắn
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sofa Dài
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sofa Bộ
                      </a>
                    </li>
                  </ul>
                </li>
                <br />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Liên Hệ
                  </a>
                </li>
                <br />
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Đăng Nhập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
