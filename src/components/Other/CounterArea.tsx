import React from "react"
import { FaGlobe, FaUsers, FaBriefcase, FaSearchDollar } from "react-icons/fa"

const CounterArea: React.FC = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-counter text-center mt-30 mb-30 wow fadeInUp animated"
              data-animation="fadeInDown animated"
              data-delay=".2s"
            >
              <div className="counter p-relative">
                <span className="icon">
                  <FaGlobe />
                </span>
                <span className="count">15</span>
              </div>
              <p>Years Of Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-counter text-center mt-30 mb-30 wow fadeInUp animated"
              data-animation="fadeInDown animated"
              data-delay=".2s"
            >
              <div className="counter p-relative">
                <span className="icon">
                  <FaUsers />
                </span>
                <span className="count">900</span>
              </div>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-counter text-center mt-30 mb-30 wow fadeInUp animated"
              data-animation="fadeInDown animated"
              data-delay=".2s"
            >
              <div className="counter p-relative">
                <span className="icon">
                  <FaBriefcase />
                </span>
                <span className="count">120</span>
                <small>+</small>
              </div>
              <p>Complete Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-counter text-center mt-30 mb-30 wow fadeInUp animated"
              data-animation="fadeInDown animated"
              data-delay=".2s"
            >
              <div className="counter p-relative">
                <span className="icon">
                  <FaSearchDollar />
                </span>
                <span className="count">150</span>
                <small>K+</small>
              </div>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterArea
