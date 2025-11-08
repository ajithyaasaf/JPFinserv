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
      {/* style-one */}
      {style === "style-one" && (
        <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow cursor-pointer">
          <div className="service-item-main h-full cursor-default">
            <div className="heading flex items-center justify-between">
              {isValidTitle(data.title) ? (
                iconMapping[data.title]
              ) : (
                <House size={40} className="text-[#152152]" />
              )}
            </div>
            <div className="heading6 hover:text-blue duration-300 mt-6">
              {data.title}
            </div>
            <div className="text-secondary mt-2">{data.desc}</div>
            {/* Enquiry Button */}
            <div
              onClick={handleOpenModal} // Open the modal on button click
              className="read-more flex items-center gap-1 mt-2 cursor-pointer"
            >
              <div className="text-button-sm">Enquire Now</div>
              <Icon.CaretRight
                weight="bold"
                className="text-blue text-sm duration-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* style-five */}
      {style === "style-five" && (
        <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow cursor-pointer">
          <div className="service-item-main h-full cursor-default">
            <div className="heading flex items-center justify-between">
              {isValidTitle(data.title) ? (
                iconMapping[data.title]
              ) : (
                <House size={40} className="text-[#152152]" />
              )}
            </div>
            <div className="heading7 hover:text-blue duration-300 mt-6">
              {data.title}
            </div>
            <div className="text-secondary mt-2">{data.desc}</div>
            {/* Enquiry Button */}
            <div
              onClick={handleOpenModal} // Open the modal on button click
              className="read-more flex items-center gap-1 mt-2 cursor-pointer"
            >
              <div className="text-button-sm">Enquire Now</div>
              <Icon.CaretRight
                weight="bold"
                className="text-blue text-sm duration-300"
              />
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
