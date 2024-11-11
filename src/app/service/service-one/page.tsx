"use client"

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFive from "@/components/Section/Service/ServiceFive"
import serviceData from "@/data/service.json"
import Partner from "@/components/Section/Partner/PartnerAbout"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import { useState } from "react"

export default function ServiceStyleOne() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            img="/images/banner/about.jpg"
            desc=""
            link="Our Services"
            title="Our Services"
          />
          <div className="mt-[100px]">
            <div className="container">
              <div className="flex gap-8 max-lg:flex-col-reverse">
                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                  <div className="heading3">
                    Effective Risk Management Solutions for Financial Stability
                  </div>
                  <div className="body2 text-secondary">
                    We offer reliable Risk Management services to safeguard your
                    assets, ensure financial stability, and navigate rapidly
                    changing business environments. We understand that managing
                    risks is crucial for the sustainability and success of your
                    enterprise.
                  </div>
                  <div className="button-block">
                    <a
                      className="button-main inline-block py-3 px-9 rounded-full"
                      style={{
                        backgroundColor: isHovered ? "#0597fc" : "#0f2054",
                        color: "#fff",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      href="/contact/contact-one"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-img w-full overflow-hidden rounded-xl">
                    <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full block"
                      src="/images/component/assessment.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <ServiceFive data={serviceData} title="" />
          </div>
          {/* Uncomment if Partner component is needed */}
          {/* <Partner /> */}
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}
