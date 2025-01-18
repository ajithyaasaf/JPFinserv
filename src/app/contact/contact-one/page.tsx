"use client"

import React, { useState } from "react"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, push } from "firebase/database"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import emailjs from "emailjs-com"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOdvQW248_4ul-ciFEEmuOghb4xdS3gs",
  authDomain: "jpfinserv-892e1.firebaseapp.com",
  projectId: "jpfinserv-892e1",
  storageBucket: "jpfinserv-892e1.appspot.com",
  messagingSenderId: "166323272116",
  appId: "1:166323272116:web:f440b4c76307ea463c5ae1",
  databaseURL: "https://jpfinserv-892e1-default-rtdb.firebaseio.com/",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default function ContactStyleOne() {
  const [isHovered, setIsHovered] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "Select your Loan", // Default to 'Select your Loan'
    message: "",
    address: "", // New field for address
  })

  const [successMessage, setSuccessMessage] = useState("") // State for success message

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Prepare the data to send in the email
    const emailData = {
      from_name: formData.name, // The user's name
      phone: formData.phone, // The user's phone number
      email: formData.email, // The user's email address
      loan_type: formData.loanType, // The loan type selected
      message: formData.message, // The user's message
      address: formData.address, // The user's address
      from_email: formData.email, // Set 'From' field to the user's email
    }

    try {
      // Send the form data to EmailJS
      const result = await emailjs.send(
        "service_k85p6uc", // Replace with your EmailJS Service ID
        "template_9ue7arm", // Replace with your EmailJS Template ID
        emailData,
        "9VMEM3abPPM9o7lOD" // Replace with your EmailJS Public Key
      )

      console.log("Email successfully sent:", result.text)

      // Save the form data to Firebase
      const contactRef = ref(database, "contacts")
      await push(contactRef, formData)

      setSuccessMessage(
        "Your details have been submitted successfully! We will get back to you shortly."
      )

      // Reset the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        loanType: "Select your Loan", // Reset loan type
        message: "",
        address: "", // Reset address field
      })

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSuccessMessage("Failed to submit details, please try again.")
    }
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            img="/images/banner/services.jpg"
            desc=""
            link="Contact us"
            title="Contact us"
          />
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col xl:items-center gap-y-8">
                <div className="w-full xl:w-2/5">
                  <div
                    className="infor rounded-xl p-10"
                    style={{ backgroundColor: "#0299ff" }} /* .bg-blue */
                  >
                    <div className="heading5 text-white">Get in touch</div>
                    <div className="body3 text-white mt-2">
                      We will get back to you within 24 hours, or call us every
                      day
                    </div>
                    <div className="list-more-infor md:mt-10 mt-6">
                      {/* The information section */}
                      <div className="item flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Clock className="text-black text-2xl" />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          8AM - 6PM, Mon - Sun
                        </div>
                      </div>

                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Phone className="text-black text-2xl" />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          +91 97919 12211
                        </div>
                      </div>

                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.Envelope className="text-black text-2xl" />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          Service@jpfinserv.com
                        </div>
                      </div>

                      <div className="item flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          <Icon.MapPin className="text-black text-2xl" />
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          93,1st Floor, Navalar Nagar, Bye Pass Road, Madurai -
                          625 016
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-3/5 xl:pl-20">
                  <form
                    onSubmit={handleSubmit}
                    className="form-block flex flex-col justify-between gap-5"
                  >
                    <div className="heading">
                      <div className="heading5">Request a quote</div>
                      <div className="body3 text-secondary mt-2">
                        We will get back to you within 24 hours, or call us
                        every day
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="w-full">
                        <input
                          name="name"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="w-full">
                        <input
                          name="phone"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="number"
                          placeholder="Phone No"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          name="email"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <select
                          name="loanType"
                          className="w-full bg-surface text-secondary caption1 pl-3 py-3 rounded-lg"
                          value={formData.loanType}
                          onChange={handleChange}
                          required
                        >
                          <option value="Select your Loan">
                            Select your Loan
                          </option>
                          <option value="Home Loan">Home Loan</option>
                          <option value="Mortgage Loan">Mortgage Loan</option>
                          <option value="BT + Topup">BT + Topup</option>
                          <option value="Business Loan">Business Loan</option>
                          <option value="Personal Loan">Personal Loan</option>
                          <option value="Vehicle Loan">Vehicle Loan</option>
                          <option value="NRI Loan">NRI Loan</option>
                        </select>
                      </div>
                      {/* New Address Field */}
                      <div className="col-span-2 w-full">
                        <input
                          name="address"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Your Address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <textarea
                          name="message"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          rows={4}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="button-block">
                      <button
                        type="submit"
                        className="button-main text-white text-button rounded-full"
                        style={{
                          backgroundColor: isHovered ? "#0597fc" : "#050f3f", // Adjust the hover color as needed
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        Submit request
                      </button>
                    </div>
                    {successMessage && (
                      <div style={{ color: "green" }} className="mt-2">
                        {successMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}
