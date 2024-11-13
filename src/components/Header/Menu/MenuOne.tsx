"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const MenuOne = () => {
  const pathname = usePathname()
  const [fixedHeader, setFixedHeader] = useState(false)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setFixedHeader(scrollPosition > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`header-menu style-one bg-white ${
          fixedHeader ? "fixed" : ""
        }`}
        style={{ height: "100px" }} // Default larger height for desktop/tablet
      >
        <div className="container flex items-center justify-between h-full">
          {/* Logo */}
          <Link className="menu-left-block" href="/">
            <Image
              src={"/images/Logo.jpg"}
              width={2000} // Keeping previous width for the logo
              height={1000}
              alt="logo"
              priority={true}
              className="w-[300px] max-sm:w-[180px]" // Slightly increased logo size for larger screens
            />
          </Link>

          {/* Menu items (Center block) */}
          <div className="menu-center-block h-full flex justify-center items-center">
            <ul className="menu-nav flex items-center h-full">
              {/* Home */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href="/">
                  <span>Home</span>
                </Link>
              </li>

              {/* About */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/about/") ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href="/about/about-one">
                  <span>About</span>
                </Link>
              </li>

              {/* Services */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/service") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href="/service/service-one"
                >
                  <span>Services</span>
                </Link>
              </li>

              {/* Contact */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/contact/") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href="/contact/contact-one"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right section (Call and Hamburger) */}
          <div className="menu-right-block flex items-center">
            <div className="icon-call">
              <i
                className="icon-phone-call text-4xl"
                style={{ color: "#152152" }}
              ></i>
            </div>
            <div className="text ml-3">
              <div className="text caption1 pl-2">Call us</div>
              <div className="number text-button">+91 9791912211</div>
            </div>
            <div
              className="menu-humburger hidden pointer"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
            >
              <Icon.List className="text-2xl" weight="bold" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="menu-mobile-block" className={`${openMenuMobile && "open"}`}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                <li className="nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3">
                  <Link className="nav-link-mobile" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3">
                  <Link className="nav-link-mobile" href="/about/about-one">
                    About
                  </Link>
                </li>
                <li className="nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3">
                  <Link className="nav-link-mobile" href="/service/service-one">
                    Services
                  </Link>
                </li>
                <li className="nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3">
                  <Link className="nav-link-mobile" href="/contact/contact-one">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Menu Height Adjustment */
        @media (max-width: 768px) {
          .header-menu {
            height: 70px !important; /* Reduced height on mobile */
          }
        }
      `}</style>
    </>
  )
}

export default MenuOne
