"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const AboutTwo = () => {
  const [tabActive, setTabActive] = useState<string>("about us")
  const [isHovered, setIsHovered] = useState(false)

  const handleTabActive = (item: string) => {
    setTabActive(item)
  }

  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-white">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/JPFINSERV.jpg"
                width={4000}
                height={4000}
                alt=""
                className="w-full h-full block"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-col lg:pl-20">
            <div className="heading3">About Us</div>
            <div className="nav-infor mt-8">
              <div className="list-nav flex items-center gap-10 border-b border-line w-fit">
                {["History"].map((item, index) => (
                  <div
                    className={`text-button-sm has-line-before line-2px line-blue cursor-pointer capitalize ${
                      tabActive === item ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleTabActive(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div
                className={`description item-filter ${
                  tabActive === "about us" ? "show" : "hide"
                }`}
              >
                <div className="title text-secondary mt-4">
                  <p>
                    Founded in 2009 by Mr. Jaya Prakash, JP FinServ is a trusted
                    financial services company committed to making borrowing
                    easy, quick, and accessible. With over a decade of
                    experience, we have helped thousands of customers achieve
                    their financial goals by providing a diverse range of loan
                    products tailored to meet various needs.
                  </p>

                  <h3 className="mt-4">Our Journey and Success</h3>
                  <p>
                    Since its inception, JP FinServ has grown significantly,
                    having disbursed over 2,500 loans to date. Currently, we
                    manage a portfolio of more than 1,200 active loans,
                    reflecting our commitment to supporting our clients with
                    reliable financial solutions. We understand the unique needs
                    of each borrower, which is why we offer loans with simple
                    eligibility requirements, even for clients without Income
                    Tax Returns (ITR).
                  </p>

                  {/* <h3 className="mt-4 text-xl font-bold text-blue-600 underline">
                    Our Loan Products
                  </h3>

                  <p>
                    We provide a comprehensive range of loan products designed
                    to cater to the diverse financial needs of individuals and
                    businesses:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Home Loan</strong>: For those looking to buy their
                      dream home, our home loans offer competitive interest
                      rates and flexible repayment options to make homeownership
                      affordable.
                    </li>
                    <li>
                      <strong>Mortgage Loan</strong>: Unlock the potential of
                      your property with our mortgage loans. Use the funds for
                      any personal or business need while leveraging your
                      property’s value.
                    </li>
                    <li>
                      <strong>Balance Transfer (BT) + Top-Up</strong>: Refinance
                      your existing loan at better terms and get additional
                      funds with our Balance Transfer and Top-Up loan options.
                    </li>
                    <li>
                      <strong>Business Loan</strong>: Whether you’re expanding
                      your business or starting a new venture, our business
                      loans provide the capital you need to fuel growth and
                      innovation.
                    </li>
                    <li>
                      <strong>Personal Loan</strong>: From medical emergencies
                      to wedding expenses, our personal loans offer quick
                      funding to cover any personal financial need.
                    </li>
                    <li>
                      <strong>Vehicle Loan</strong>: We make vehicle ownership
                      easy with flexible vehicle loans, whether you’re buying a
                      car, bike, or commercial vehicle.
                    </li>
                    <li>
                      <strong>NRI Loan</strong>: For Non-Resident Indians
                      looking to invest or manage financial commitments back
                      home, our NRI loans are tailored to meet their specific
                      needs with convenient terms.
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
              <a
                className="button-main text-white text-button rounded-full"
                style={{
                  backgroundColor: isHovered ? "#0597fc" : "#152152",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/contact/contact-one" // Updated URL
              >
                Get started
              </a>
              <a
                className="button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button rounded-full border-2 border-blue flex items-center gap-2"
                href="/contact/contact-one"
              >
                <i className="ph ph-phone text-xl"></i>
                <span>(+91) 97919 12211</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTwo
