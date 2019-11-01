import React from 'react'
import './Footer.css';


export default function Footer() {
  return (

    <footer class="page-footer font-small special-color-dark pt-4">


      <div class="container">


        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/imranmalik9865">
              <i class="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1" href="https://github.com/ilyasimran27">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
              <i class="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>


      </div>



      <div class="footer-copyright py-3">© 2019 Copyright:
    <a href="https://github.com/ilyasimran27"> Muhammad Imran</a>
      </div>


    </footer>

  )
}
