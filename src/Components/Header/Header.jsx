import React from 'react';
import Category from '../Category';



const Header = () => {
    return (

<section className=''>
       <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
       <img src="Logo1.png" alt="" />
    <section className='mt-2' style={{width:'40%', marginLeft:'40%'}}>
        <div class="input-group mb-2">
            <input type="text" class="form-control" placeholder="Tìm Kiếm Đê Mấy Con Chó ......." aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    </section>   
    
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Furniture E-Commerce</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Trang Chủ</a>
          </li>
          <br/>
          <li class="nav-item">
            <a class="nav-link" href="#">Giới Thiệu</a>
          </li>
          <br/>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sản Phẩm
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Sofa Ngắn</a></li>
                <li><a class="dropdown-item" href="#">Sofa Dài</a></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a className='dropdown-item' href='#'>Sofa Bộ</a></li>
              </ul>
          </li>
          <br/>
          <li class="nav-item">
            <a class="nav-link" href="#">Liên Hệ</a>
          </li>
          <br/>
          <li class="nav-item">
            <a class="nav-link" href="#">Đăng Nhập</a>
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