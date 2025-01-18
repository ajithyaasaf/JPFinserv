"use client"

import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const CaseStudyOne = () => {
  return (
    <>
      <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
        <div className="container">
          <div className="heading text-center">
            <h3 className="heading3">Our Process</h3>
          </div>
        </div>
        <div className="list-case-study md:mt-10 mt-6">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-2 gap-y-6 sm:gap-y-10">
            {/* Case Study Item */}
            {[ 
              {title: "Free Cibil Check", description: "Get a free CIBIL score check to assess your creditworthiness and take the first step towards better financial health."}, 
              {title: "Documentation", description: "We handle all documentation to ensure your financial process is smooth and meets all necessary requirements."},
              {title: "Approval", description: "We work to secure approvals quickly, ensuring that you get the best terms for your loan or financial product."}, 
              {title: "Sanction & Payments", description: "After approval, we ensure a quick and secure sanction and payment process, with clear terms and timely transfers."}
            ].map((caseStudy, index) => (
              <div key={index} className="w-full">
                <div className="case-study-item group">
                  {/* Image */}
                  <div className="bg-img bg-white w-full h-[400px] block"></div>
                  <div className="text flex flex-col justify-between gap-3 py-6">
                    {/* Heading */}
                    <div className="heading5">
                      <Link
                        className="text-black group-hover:text-white transition-colors duration-300"
                        href="/contact/contact-one"
                      >
                        {caseStudy.title}
                      </Link>
                    </div>
                    {/* Description */}
                    <div className="body2 text-black group-hover:text-white transition-colors duration-300">
                      {caseStudy.description}
                    </div>
                    {/* Read More Link */}
                    <Link
                      className="flex items-center gap-1 group-hover:text-white transition-colors duration-300"
                      href="/service/service-one"
                    >
                      <div className="text-button text-black hover:text-white">
                        Read More
                      </div>
                      <Icon.CaretDoubleRight
                        weight="bold"
                        className="text-xs text-black hover:text-white mt-1 transition-colors duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .case-study-item {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }

        /* This translateY effect only applies to larger screens (desktops, tablets) */
        @media (min-width: 768px) {
          .case-study-item:hover .text {
            transform: translateY(100px); /* Moves content down only on larger screens */
          }
        }

        .case-study-item .text {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease-in-out;
        }

        .group:hover .text a {
          color: #000; /* Ensures text is white on hover */
        }

        @media (max-width: 640px) {
          .case-study-block .case-study-item {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}

export default CaseStudyOne
