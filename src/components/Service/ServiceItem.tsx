"use client" // This line enables client-side rendering for this component

import React, { useState } from "react"
import { ServiceType } from "@/type/ServiceType"
import LoanFormModal from "@/components/Service/LoanFormModal" // Adjust the import path as needed
import * as Icon from "@phosphor-icons/react/dist/ssr"

// Icons for loan types
import {
  House,
  Briefcase,
  Wallet,
  Car,
  User,
  Plus,
  Bank, // Added Bank icon for Mortgage Loan
} from "@phosphor-icons/react"

// Define the interface for props
interface Props {
  data: ServiceType
  style: string
  number: number
}

const ServiceItem: React.FC<Props> = ({ data, style, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Set up an object mapping for icons based on loan type
  const iconMapping: Record<string, React.JSX.Element> = {
    "Home Loan": <House size={40} className="text-[#49befb]" />,
    "Business Loan": <Briefcase size={40} className="text-[#49befb]" />,
    "Personal Loan": <Wallet size={40} className="text-[#49befb]" />,
    "Vehicle Loan": <Car size={40} className="text-[#49befb]" />,
    "Mortgage Loan": <Bank size={40} className="text-[#49befb]" />, // Changed to Bank icon
    "NRI Loan": <User size={40} className="text-[#49befb]" />,
    "BT + Topup": <Plus size={40} className="text-[#49befb]" />,
  }

  // Type guard to ensure data.title is a valid key of iconMapping
  const isValidTitle = (title: string): title is keyof typeof iconMapping => {
    return title in iconMapping
  }

  return (
    <>
      {style === "style-one" && (
        <div
          onClick={handleOpenModal}
          className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow cursor-pointer"
        >
          <div className="service-item-main h-full cursor-default">
            <div className="heading flex items-center justify-between">
              {/* Use the type guard to ensure valid key */}
              {isValidTitle(data.title) ? (
                iconMapping[data.title]
              ) : (
                <House size={40} className="text-[#152152]" />
              )}
              {/* <div className="number heading3 text-placehover">
                {number + 1}
              </div> */}
            </div>
            <div className="heading6 hover:text-blue duration-300 mt-6">
              {data.title}
            </div>
            <div className="text-secondary mt-2">{data.desc}</div>
          </div>
        </div>
      )}

      {style === "style-two" && (
        <div
          onClick={handleOpenModal}
          className="service-item py-7 px-6 bg-white rounded-lg border border-line box-shadow-sm hover-box-shadow cursor-pointer"
        >
          <div className="service-item-main flex items-center gap-8 h-full cursor-default">
            <div className="icon">
              {/* Use the type guard to ensure valid key */}
              {isValidTitle(data.title) ? (
                iconMapping[data.title]
              ) : (
                <House size={40} className="text-[#152152]" />
              )}
            </div>
            <div className="infor">
              <div className="heading7 hover:text-blue duration-300">
                {data.title}
              </div>
              <div className="text-secondary mt-2">{data.shortDesc}</div>
              <div className="read-more flex items-center gap-1 mt-2">
                <div className="text-button-sm">Explore</div>
                <Icon.CaretRight
                  weight="bold"
                  className="text-blue text-sm duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {style === "style-three" && (
        <div
          onClick={handleOpenModal}
          className="service-item px-8 py-10 bg-white rounded-lg cursor-pointer"
        >
          <div className="service-item-main flex flex-col items-center h-full cursor-default">
            <i
              className={`${data.icon} text-gradient md:text-6xl text-5xl`}
            ></i>
            <div className="heading7 text-center hover:text-gradient duration-300 mt-6">
              {data.title}
            </div>
            <div className="caption1 text-secondary text-center mt-1.5">
              {data.desc}
            </div>
          </div>
        </div>
      )}

      {style === "style-four" && (
        <div
          onClick={handleOpenModal}
          className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow cursor-pointer"
        >
          <div className="service-item-main h-full cursor-default">
            <i className={`${data.icon} text-black md:text-6xl text-5xl`}></i>
            <div className="heading7 hover:text-success duration-300 mt-6">
              {data.title}
            </div>
            <div className="text-secondary mt-2">{data.desc}</div>
          </div>
        </div>
      )}

      {style === "style-five" && (
        <div
          onClick={handleOpenModal}
          className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow cursor-pointer"
        >
          <div className="service-item-main h-full cursor-default">
            <div className="heading flex items-center justify-between">
              {/* Display the corresponding icon for style-five */}
              {isValidTitle(data.title) ? (
                iconMapping[data.title]
              ) : (
                <House size={40} className="text-[#152152]" />
              )}
              {/*   <div className="number heading3 text-placehover">
                {number + 1}
              </div> */}
            </div>
            <div className="heading7 hover:text-blue duration-300 mt-6">
              {data.title}
            </div>
            <div className="text-secondary mt-2">{data.desc}</div>
          </div>
        </div>
      )}

      {style === "style-six" && (
        <div className="service-item rounded-2xl border border-line hover-box-shadow">
          <div className="service-item-main block h-full px-8 pb-7 md:pt-14 pt-10 cursor-default">
            <div className="icon md:w-[100px] w-20 md:h-[100px] h-20 flex items-center justify-center rounded-2xl">
              <i className={`${data.icon} text-white md:text-5xl text-4xl`}></i>
            </div>
            <div className="heading7 text-white hover:text-orange duration-300 mt-6">
              {data.title}
            </div>
            <div className="text-placehover mt-3">{data.desc}</div>
          </div>
        </div>
      )}

      {style === "style-about" && (
        <div
          onClick={handleOpenModal}
          className="service-item py-8 px-7 bg-white rounded-lg hover-box-shadow cursor-pointer"
        >
          <div className="service-item-main flex flex-col justify-between h-full cursor-default">
            <div className="heading flex items-center gap-4">
              <i
                className={`${data.icon} text-[#152152] md:text-5xl text-4xl`}
              ></i>
              <div className="heading7 hover:text-blue duration-300">
                {data.title}
              </div>
            </div>
            <div className="text-secondary mt-4">{data.desc}</div>
          </div>
        </div>
      )}

      {style === "style-about-two" && (
        <div
          onClick={handleOpenModal}
          className="service-item px-4 bg-white rounded-lg cursor-pointer"
        >
          <div className="service-item-main flex flex-col items-center h-full cursor-default">
            <i
              className={`${data.icon} text-[#152152] md:text-6xl text-5xl`}
            ></i>
            <div className="heading7 text-center hover:text-blue duration-300 mt-6">
              {data.title}
            </div>
            <div className="caption1 text-secondary text-center mt-1.5">
              {data.desc}
            </div>
          </div>
        </div>
      )}

      {/* Modal component */}
      <LoanFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        loanType={data.title} // Pass the loan type to the modal
      />
    </>
  )
}

export default ServiceItem
