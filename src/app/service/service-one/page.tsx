"use client"

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import ServiceFive from "@/components/Section/Service/ServiceFive"
import serviceData from "@/data/service.json"
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
                    Simple Solutions to Protect Your Finances
                  </div>
                  <div className="body2 text-secondary">
                    We provide easy-to-understand services that help protect
                    your money and assets. Our goal is to keep you financially
                    secure, even in uncertain times. Whether you&apos;re an
                    individual or a business, we&apos;ll help you manage risks
                    and make sure you&apos;re ready for whatever comes next.
                    <br />
                    <br />
                    With our solutions, you can feel confident about your
                    financial future. We&apos;re here to offer guidance and
                    support so you can make informed decisions and protect what
                    matters most.
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
                      Get in Touch
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="bg-img w-full overflow-hidden rounded-xl">
                    <Image
                      width={5000}
                      height={4000}
                      className="w-full h-full block"
                      src="/images/Serviceimage.jpg"
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
