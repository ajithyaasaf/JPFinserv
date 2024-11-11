import Link from "next/link"

const CtaOne = () => {
  return (
    <div className="cta-block style-two relative lg:h-[120px] h-[180px]">
      {/* Replacing the background image with a solid color */}
      <div className="bg-[#0597fc] w-full h-full absolute top-0 left-0 z-[-1]"></div>
      <div className="container flex items-center justify-between max-lg:flex-col max-lg:justify-center gap-6 h-full">
        <div className="heading5 max-lg:text-center text-white">
          Looking for a first-class Loan consultant?
        </div>
        <Link
          className="button-main rounded-full hover:bg-[#050f3f] hover:text-white bg-white text-button px-9 py-3"
          href="/contact/contact-one"
        >
          Get A Quote
        </Link>
      </div>
    </div>
  )
}

export default CtaOne
