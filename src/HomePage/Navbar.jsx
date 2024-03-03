import React from 'react'
import "./Navbar.css"
// import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"



const Navbar = () => {

  return (
    <>
     <nav className='main-nav'>
          {/* logo part */}
        <div className='logo'>
            <h2>
                <span>S</span>park
                <span>T</span>ech
            </h2> 
        </div>

              {/* Menu part */}

        <div className='menu-link'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

                {/* Search bar */}

        <div className='search-box'>
            <input type="text" placeholder=' Search'/>
            <img src="/src/images/search-b.png" alt="" />
        </div> 

            {/* login & Register Button */}

        <div className="btn">
            <button><span className='btn2'></span>Login</button>
            <button><span className='btn2'></span>Register</button>
        </div>

   </nav>


               {/* Social Media Links */}

        {/* <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <a href="#" target='_blank'> <FaFacebookSquare className='fb'/> </a>
                </li>

                <li>
                    <a href="#" target='_blank'> <FaInstagramSquare className='ig'/> </a>
                </li>

                <li>
                    <a href="#" target='_blank'> <FaYoutubeSquare className='yt'/> </a>
                </li>
            </ul>
        </div> */}
             
             
             {/* Hero Section */}

        <section className="hero-section">
            <p>Welcome to</p>
            <h1>Spark Tech</h1>
        </section>

     
    </>
  )
}

export default Navbar
