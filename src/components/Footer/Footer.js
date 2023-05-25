import './Footer.scss'

const Footer = () => {
  return (
      <footer className='footer py-5 bg-dark'>
        <div className='container'>
          <div className='footer-content text-white grid'>
            <div className='footer-item text-center'>
                <h6 className='fs-17 fw-6'>Links</h6>
                <ul>
                  <li>
                    <a href='/about' className='fs-15'>About Us</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>Contact</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>Blogs</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>FAQ's</a>
                  </li>
                </ul>

            </div>

            <div className='footer-item text-center'>
                <h6 className='fs-17 fw-6'>Policies</h6>
                <ul>
                  <li>
                    <a href='/about' className='fs-15'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>Cookies Policy</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>Data Policy</a>
                  </li>
              
                </ul>

            </div>  

            <div className='footer-item text-center'>
                <h6 className='fs-17 fw-6'>About Shopping Hub</h6>
                <ul>
                  <li>
                    <a href='/about' className='fs-15'>Company Info</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>Branches</a>
                  </li>
                  <li>
                    <a href='/about' className='fs-15'>Store</a>
                  </li>
              
                </ul>

            </div>  

            <div className='footer-item text-center'>
              <h6 className='fs-17 fw-6'>Contact</h6>
              <ul>
                <li>
                    <span>
                      <i className='fas fa-phone'></i>
                    </span>
                      <span className='fs-15'>+92-340-2220547</span>
                </li>

                <li>
                    <span>
                      <i className='fas fa-envelope'></i>
                    </span>
                      <span className='fs-15'>info@shoppinghub.com</span>
                </li>

              </ul>

            </div>
          </div>

        </div>

      </footer>


  )
}

export default Footer;