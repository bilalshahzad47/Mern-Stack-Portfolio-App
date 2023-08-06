import React from 'react'
import './Projects.css';
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top Recent Projects</h2>
        <hr/>
        <p className="pb-3 text-center">
        ✔ Here are my top 3 recent projects with live links and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      MERN Stack Ecommerce Web App
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/bilalshahzad47/Mern-Stack-Ecommerce-App"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img
                    src="https://user-images.githubusercontent.com/36054945/70378297-5f35c600-1927-11ea-875c-7e030851cb87.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>

                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">MERN Stack Blood Bank Web App</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/bilalshahzad47/Mern-Stack-Blood-Bank-App"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Job Portal Backend</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>  
        </div>
      </div>
    </>
  )
}

export default Projects
