"use client"

import React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"

interface Props {
    classname?: string
}

const AssociatePartners: React.FC<Props> = ({ classname }) => {
    const banks = [
        { name: "Bank of Baroda", logo: "/images/Associate Partners/BOB.svg" },
        { name: "Indian Bank", logo: "/images/Associate Partners/Indian bank.png" },
        { name: "Canara Bank", logo: "/images/Associate Partners/Canara Bank.png" },
        { name: "HDFC Bank", logo: "/images/Associate Partners/Hdfc.svg" },
    ]

    const nbfcs = [
        { name: "Can Fin Homes Ltd", logo: "/images/Associate Partners/Can Fin Homes.png" },
        { name: "PNB Housing Finance Ltd", logo: "/images/Associate Partners/PNB.png" },
        { name: "LIC Housing Finance Ltd", logo: "/images/Associate Partners/LIC HFL.svg" },
        { name: "Repco Home Finance", logo: "/images/Associate Partners/Repco.svg" },
        { name: "Piramal Finance", logo: "/images/Associate Partners/Piramal Finance.png" },
    ]

    return (
        <section className={`associate-partners-section py-16 md:py-24 ${classname}`}>
            <div className="container px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="heading3 mb-4" style={{ color: '#121212' }}>
                        Our Associate Partners
                    </h2>
                    <p style={{ color: '#64666c', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                        We assist customers in coordinating loan application processing through banks and NBFCs.
                    </p>
                </div>

                {/* Banks Section */}
                <div className="mb-10 md:mb-14">
                    <div className="mb-6 px-4">
                        <h3 style={{
                            display: 'inline-block',
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '600'
                        }}>
                            🏦 Banks
                        </h3>
                    </div>
                    <Marquee speed={40} gradient={false} pauseOnHover={true}>
                        {[...banks, ...banks].map((bank, index) => (
                            <div key={index} className="mx-3 md:mx-4">
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    width: '180px',
                                    height: '140px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    <div style={{ width: '80px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                        <Image
                                            src={bank.logo}
                                            width={80}
                                            height={60}
                                            alt={bank.name}
                                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <p style={{ fontSize: '13px', fontWeight: '500', color: '#374151', textAlign: 'center' }}>
                                        {bank.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* NBFCs Section */}
                <div>
                    <div className="mb-6 px-4">
                        <h3 style={{
                            display: 'inline-block',
                            backgroundColor: '#059669',
                            color: '#ffffff',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '600'
                        }}>
                            💰 NBFCs
                        </h3>
                    </div>
                    <Marquee speed={35} direction="right" gradient={false} pauseOnHover={true}>
                        {[...nbfcs, ...nbfcs].map((nbfc, index) => (
                            <div key={index} className="mx-3 md:mx-4">
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    width: '180px',
                                    height: '140px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    <div style={{ width: '80px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                        <Image
                                            src={nbfc.logo}
                                            width={80}
                                            height={60}
                                            alt={nbfc.name}
                                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <p style={{ fontSize: '13px', fontWeight: '500', color: '#374151', textAlign: 'center' }}>
                                        {nbfc.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default AssociatePartners
