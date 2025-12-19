import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="style-one">
      <div className="footer-block bg-dark pt-[60px]">
        <div className="container">
          <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
            <div className="lg:w-1/4">
              <div className="footer-company-infor flex flex-col justify-between gap-5">
                <Image
                  width={5000}
                  height={4000}
                  className="footer-logo h-[65px] sm:w-[250px] w-[198px]" // Reduced size on small screens
                  src="/images/Logo.jpg"
                  alt="Logo"
                />
                <div className="text caption1 text-white">
                  We are a diversified company specialized in providing
                  comprehensive financial solutions for individuals and
                  businesses.
                </div>
                <div className="list-social flex items-center gap-2.5 style-one">
                  <Link
                    className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                    href="https://www.facebook.com/profile.php?id=61566147273973"
                    target="_blank"
                  >
                    <i className="icon-facebook text-sm"></i>
                  </Link>
                  <Link
                    className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                    href="https://www.instagram.com/jpfinserv/"
                    target="_blank"
                  >
                    <i className="icon-insta text-xs"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Center Quick Links and its content */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="footer-navigate flex flex-col justify-center items-center">
                {" "}
                {/* Center the "Quick Links" and its list */}
                <div className="footer-nav-item text-center">
                  {" "}
                  {/* Make the heading and list centered */}
                  <div className="item-heading text-button-sm text-white">
                    Quick Links
                  </div>
                  <ul className="list-nav mt-1">
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/about/about-one"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/service/service-one"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/contact/contact-one"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="company-contact">
                <div className="heading text-button-sm text-white">
                  Contact Us
                </div>
                <div className="mt-3 text-surface">
                  If you have any questions, feel free to reach out to us!
                </div>
                <div className="mt-2 flex items-center">
                  <Icon.MapPin weight="light" className="text-surface" />
                  <div className="caption1 text-surface ml-2">
                    93,1st Floor, Navalar Nagar, Bye Pass Road, Madurai - 625
                    016
                  </div>
                </div>
                <div className="mt-2">
                  <Link
                    className="caption1 text-surface hover-underline"
                    href="/contact/contact-one"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-line"></div>

          <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
            <div className="left-block flex items-center">
              <div className="copy-right text-surface caption1">
                ©2024 Designed and developed by{" "}
                <Link
                  href="https://godivatech.com/"
                  target="_blank"
                  className="text-white hover-underline"
                >
                  Godiva Tech
                </Link>
                . All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
