'use client'
import { Link } from 'react-router-dom';
import React from 'react'

export default function index() {
  return (
    <>
  
  {/* Hero Block Wrapper*/}
  <div className="hero-block-wrapper bg-white">
    {/* Styles*/}
    <div className="hero-block-styles mt-3">
      <div
        className="hb-styles1"
      />
      <div className="hb-styles2" />
      <div className="hb-styles3" />
    </div>
    <div className="container">
      {/* Skip Page*/}
      <div className="banner2">
        {/* Hero Block Content*/}
        <center>
          <div className="hero-block-content">
            <div className="border-container">
              <div className="border2" />
              <div className="border3" />
              <div className="border4" />
            </div>
            <img className="img2" src="assets/img/me/me.png" />
          </div>
        </center>
        <h1 className="thello text-info text-center">Hello👋🏻</h1>
        <h1
          className="text-dark text-center mb-3 t2"
        >
          I'm Mishab
        </h1>
        <p className=" text-dark text-center">
          And i'm a<br />
            <strong>
              <span className="span2 text-danger text-center"></span>
            </strong>
        </p>
        <p className="text-dark text-center p-3">
          A web designer and developer with experience in MERN stack and Python,
          proficient in Web/App development, IoT, and AWS. Skilled in team
          leadership, with demonstrated experience in leading teams at
          freelancing levels, coupled with strong communication abilities.{" "}
        </p>
        {/* <a class="btn btn-danger btn-creative btn-lg w-100"
    href="#start">Explore More</a> */}
      </div>
    </div>
  </div>
  {/* <div class="page-content-wrapper py-3"> */}
  <div className="container">
    <div
      className="card card2 shadow-lg image-gallery-card direction-rtl mb-6"
      id="start"
    >
      <div className="card-body">
        <img className="mb-3 rounded" src="assets/img/me/img.png" />
        <strong>
          <h5 className=" mt-2">
            <b>About Me</b>
          </h5>
          <hr className="mb-4 w-50" />
        </strong>
        <h6>
          👋 Hi there! I'm Mishab, a passionate full-stack web developer with a
          Bachelor's degree in Computer Applications (BCA) from Calicut
          University and a Master's degree in Computer Applications (MCA) from
          KTU University. <br />
          <br />
          My expertise includes the MERN stack, IoT, AWS, Docker, and Flutter.
          I'm currently freelancing at VectorCrop, a venture I founded, where I
          collaborate with clients to bring their visions to life.
          <br />
          <br />
          Outside of coding, I enjoy exploring the outdoors, reading, and
          tinkering with gadgets.
          <br />
          <br />
          When it comes to technology, I'm always eager to stay ahead of the
          curve. Whether it's learning new languages or diving into emerging
          trends, I thrive on embracing new challenges and pushing the
          boundaries of what's possible in the digital realm. My relentless
          drive for excellence fuels my commitment to delivering top-notch
          solutions that empower businesses to thrive in today's dynamic digital
          landscape.
        </h6>
        <h6 className="mt-3">
          <i className="fa fa-angle-right" /> <span> Born : </span>12th March
          2001
          <br />
          <i className="fa fa-angle-right" /> <span> From : </span> Balusser,
          Kozhikode, Kerala
          <br />
          <i className="fa fa-angle-right" /> <span> Phone : </span> +91 99471
          54691
          <br />
          <i className="fa fa-angle-right" /> <span> Email : </span>{" "}
          mishabdev@gmail.com
          <br />
          <i className="fa fa-angle-right" /> <span> Degree : </span> BCA (2022,
          Calicut University)
          <br />
          <i className="fa fa-angle-right" /> <span> Post Graduation : </span>{" "}
          MCA (2024, KTU University)
          <br />
          {/* <i className="fa fa-angle-right" /> <span> Website : </span>{" "}
          <a href="https://www.vectorcrop.com" target="_____blanck">
            www.vectorcrop.com
          </a> */}
        </h6>
        <a className="btn btn-primary mt-3 mb-5" href="assets/pdf/finalcv.pdf">
          Download My Resume
        </a>
        <br />
        <div className="row g-3">
          <div className="col-3">
            <a href="https://github.com/imishab" target="_____blanck">
              <div className="feature-card text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/github.png" alt="" />
                </div>
                <p className="mb-0">Github</p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="https://dribbble.com/i-mishab" target="_____blanck">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/dribbble.png" alt="" />
                </div>
                <p className="mb-0">Dribbble</p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.facebook.com/i.mishab/" target="_____blanck">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/facebook.png" alt="" />
                </div>
                <p className="mb-0">Facebook </p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.instagram.com/i.mishab/" target="_____blanck">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/instagram.png" alt="" />
                </div>
                <p className="mb-0">Instagram</p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.linkedin.com/in/mishab-msb-4aa6b6201/"
              target="_____blanck"
            >
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/linkedin.png" alt="" />
                </div>
                <p className="mb-0">Linkedin</p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.youtube.com/channel/UCsBAJimRq5wQDG3hjg7vHyw"
              target="_____blanck"
            >
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/youtube.png" alt="" />
                </div>
                <p className="mb-0">Youtube</p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://api.whatsapp.com/send/?phone=9947154691&text&app_absent=0"
              target="_____blanck"
            >
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/whatsapp.png" alt="" />
                </div>
                <p className="mb-0">Whatsapp</p>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.behance.net/i-mishab" target="_____blanck">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/social/behance.png" alt="" />
                </div>
                <p className="mb-0">Behance</p>
              </div>
            </a>
          </div>
        </div>
        <br />
      </div>
    </div>
    <div className="card shadow-lg">
      <div className="card-body">
        <div className="element-heading mt-1">
          <h6>Let's Know About Some of My Skills</h6>
        </div>
        <hr />
        {/* Single Skill Progress Bar*/}
        <div className="row g-3">
          <div className="col-6 col-sm-2">
            <a href="#!">
              <div className="feature-card text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/node.png" alt="" />
                </div>
                <p className="mb-0">NodeJs</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="https://dribbble.com/i-mishab">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/js.png" alt="" />
                </div>
                <p className="mb-0">JavaScript</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/react.png" alt="" />
                </div>
                <p className="mb-0">React Js </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/next.png" alt="" />
                </div>
                <p className="mb-0">Next Js</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a
              href=""
            
            >
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/mongo.png" alt="" />
                </div>
                <p className="mb-0">MongoDB</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a
              href=""
            
            >
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/sql.png" alt="" />
                </div>
                <p className="mb-0">MySQL</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a
              href=""
            
            >
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/flutter.png" alt="" />
                </div>
                <p className="mb-0">Flutter</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/python.png" alt="" />
                </div>
                <p className="mb-0">Python</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/html.png" alt="" />
                </div>
                <p className="mb-0">HTML</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/tailwind.png" alt="" />
                </div>
                <p className="mb-0">Tailwind Css</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/aws.png" alt="" />
                </div>
                <p className="mb-0">AWS</p>
              </div>
            </a>
          </div>

          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/docker.png" alt="" />
                </div>
                <p className="mb-0">Docker</p>
              </div>
            </a>
          </div>

          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/php.png" alt="" />
                </div>
                <p className="mb-0">PHP</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/android.png" alt="" />
                </div>
                <p className="mb-0">Android</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/ui.png" alt="" />
                </div>
                <p className="mb-0">UI/UX</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/git.png" alt="" />
                </div>
                <p className="mb-0">Git</p>
              </div>
            </a>
          </div>

          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/iot.png" alt="" />
                </div>
                <p className="mb-0">IOT</p>
              </div>
            </a>
          </div>

          <div className="col-6 col-sm-2">
            <a href="">
              <div className="feature-card mx-auto text-center">
                <div className="card shadow mx-auto">
                  <img src="assets/img/icons/opencv.png" alt="" />
                </div>
                <p className="mb-0">OpenCV</p>
              </div>
            </a>
          </div>

         
        </div>

      </div>
    </div>
  </div>
  <br />
  <div className="container">
    <div className="card service-card bg-primary bg-gradient ">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="service-text">
            <h5>My Achievements</h5>
            <p className="">Let's Know About Some of My Achievements.</p>
            <a
              href="/achievements"
              className="btn btn-danger  w-100 btn-creative"
            >
              My Achievements
            </a>
          </div>
          <div className="service-img">
            <img className='img5'
              src="assets/img/bg-img/trophy.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div className="container">
    <div className="card service-card bg-dark bg-gradient mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="service-text">
            <h5>My Design Studio</h5>
            <p className="">Let's Know About Some of My Design Works.</p>
            <Link to="/ui" className="btn btn-primary w-100 btn-creative">
              My Designs
            </Link>
          </div>
          <div className="service-img">
            <img className='img5'
              src="assets/img/bg-img/design.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-content-wrapper py-3">
  <div className="container">
  <div className="element-heading mb-3">
      <h6>Some of My Projects</h6>
    </div>
    <div className="card shadow image-gallery-card" id="works">
      <div className="card-body">
        {/* Gallery Menu*/}
        {/* <div className="gallery-menu">
          <button className="active" data-filter="*">
            All
          </button>
          <button data-filter=".poster">Posters</button>
          <button data-filter=".ui">UI/UX</button>
          <button data-filter=".logo">Logos</button>
        </div> */}
        {/* Gallery Wrapper*/}
        <div className="gallery-wrapper row g-3">
        
          {/* Single Image Gallery*/}
  <div className="col-12 col-sm-12 col-md-6 single-image-gallery poster position-relative">
  {/* Gallery Image*/}
  <div className="image-container position-relative">
    <a
      className="gallery-img"
      href="assets/img/bg-img/myworks/c2.jpg"
      data-effect="mfp-zoom-in"
    >
      <img src="assets/img/bg-img/myworks/c2.jpg" alt="" />
    </a>
    {/* Dark fade effect */}
    <div className="dark-fade-effect"></div>
    {/* Button */}
    <div className="d-flex position-relative">
    <button className="btn btn-dark position-absolute bottom-2 start-2 m-2 rounded-circle2 btn-sm">
        <i className="bi bi-github"></i>
    </button>
    <button className="btn btn-success position-absolute bottom-3 start-12 m-2 rounded-circle2 btn-sm">
      View Project
    </button>
</div>

  </div>
  
  {/* Fav Icon*/}
  <a className="fav-icon shadow" href="#">
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className="bi bi-heart-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </a>
</div>

     {/* Single Image Gallery*/}
     <div className="col-12 col-sm-12 col-md-6 single-image-gallery poster position-relative">
  {/* Gallery Image*/}
  <div className="image-container position-relative">
    <a
      className="gallery-img"
      href="assets/img/bg-img/myworks/env2.jpg"
      data-effect="mfp-zoom-in"
    >
      <img src="assets/img/bg-img/myworks/env2.jpg" alt="" />
    </a>
    {/* Dark fade effect */}
    <div className="dark-fade-effect"></div>
    {/* Button */}
    <div className="d-flex position-relative">
    <button className="btn btn-dark position-absolute bottom-2 start-2 m-2 rounded-circle2 btn-sm">
        <i className="bi bi-github"></i>
    </button>
    <button className="btn btn-success position-absolute bottom-3 start-12 m-2 rounded-circle2 btn-sm">
      View Project
    </button>
</div>

  </div>
  
  {/* Fav Icon*/}
  <a className="fav-icon shadow" href="#">
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className="bi bi-heart-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </a>
</div>

<div className="col-12 col-sm-12 col-md-6 single-image-gallery poster position-relative">
  {/* Gallery Image*/}
  <div className="image-container position-relative">
    <a
      className="gallery-img"
      href="assets/img/bg-img/myworks/c2.jpg"
      data-effect="mfp-zoom-in"
    >
      <img src="assets/img/bg-img/myworks/c2.jpg" alt="" />
    </a>
    {/* Dark fade effect */}
    <div className="dark-fade-effect"></div>
    {/* Button */}
    <div className="d-flex position-relative">
    <button className="btn btn-dark position-absolute bottom-2 start-2 m-2 rounded-circle2 btn-sm">
        <i className="bi bi-github"></i>
    </button>
    <button className="btn btn-success position-absolute bottom-3 start-12 m-2 rounded-circle2 btn-sm">
      View Project
    </button>
</div>

  </div>
  
  {/* Fav Icon*/}
  <a className="fav-icon shadow" href="#">
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className="bi bi-heart-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </a>
</div>

     {/* Single Image Gallery*/}
     <div className="col-12 col-sm-12 col-md-6 single-image-gallery poster position-relative">
  {/* Gallery Image*/}
  <div className="image-container position-relative">
    <a
      className="gallery-img"
      href="assets/img/bg-img/myworks/env2.jpg"
      data-effect="mfp-zoom-in"
    >
      <img src="assets/img/bg-img/myworks/env2.jpg" alt="" />
    </a>
    {/* Dark fade effect */}
    <div className="dark-fade-effect"></div>
    {/* Button */}
    <div className="d-flex position-relative">
    <button className="btn btn-dark position-absolute bottom-2 start-2 m-2 rounded-circle2 btn-sm">
        <i className="bi bi-github"></i>
    </button>
    <button className="btn btn-success position-absolute bottom-3 start-12 m-2 rounded-circle2 btn-sm">
      View Project
    </button>
</div>

  </div>
  
  {/* Fav Icon*/}
  <a className="fav-icon shadow" href="#">
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className="bi bi-heart-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </a>
</div>  
          
                
          
        </div>
      </div>
    </div>
  </div>

  
</div>

  <br />
</>

  )
}
