import React, { useState } from "react"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"
import emailjs from "emailjs-com"

// Firebase configuration
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

// Define the props interface
interface LoanFormModalProps {
  isOpen: boolean
  onClose: () => void
  loanType: string // Add loanType prop
}

const LoanFormModal: React.FC<LoanFormModalProps> = ({
  isOpen,
  onClose,
  loanType,
}) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("") // New state for address
  const [selectedLoanType, setSelectedLoanType] = useState(loanType)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !number || !address) {
      return // Prevent submission if any fields are empty
    }

    const loanData = { name, number, address, loanType: selectedLoanType }

    // Send email via EmailJS
    const emailData = {
      from_name: name, // The user's name
      phone: number, // The user's phone number
      // Or dynamically capture the email fieldemail: "customer-email@example.com",
      loan_type: selectedLoanType, // The loan type selected
      message: "Customer has applied for a loan.", // Predefined message or you can capture a custom message
      address: address, // The user's address
    }

    try {
      // Send the form data to EmailJS
      await emailjs.send(
        "service_k85p6uc", // Replace with your EmailJS Service ID
        "template_utid5e4", // Replace with your EmailJS Template ID
        emailData,
        "9VMEM3abPPM9o7lOD" // Replace with your EmailJS Public Key
      )

      console.log("Email sent successfully!")

      // Store the data in Firebase
      const loanRef = ref(database, "loans/" + Date.now()) // Unique key based on timestamp
      await set(loanRef, loanData)

      setSuccessMessage("Loan information submitted successfully!")
      setName("") // Clear input fields
      setNumber("")
      setAddress("") // Clear address
      setSelectedLoanType(loanType) // Reset loan type to initial value

      // Close the modal and clear the success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage("") // Clear success message
        onClose() // Close the modal
      }, 2000) // Close modal after 2 seconds
    } catch (error) {
      console.error("Error sending email or saving data: ", error)
    }
  }

  if (!isOpen) return null

  const loanOptions = [
    "Home Loan",
    "Mortgage Loan",
    "BT + Topup",
    "Business Loan",
    "Personal Loan",
    "Vehicle Loan",
    "NRI Loan",
  ]

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Apply for {loanType}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <select
            value={selectedLoanType}
            onChange={(e) => setSelectedLoanType(e.target.value)}
            required
          >
            {loanOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
        {successMessage && (
          <div style={{ color: "green", marginTop: "10px" }}>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  )
}

export default LoanFormModal
