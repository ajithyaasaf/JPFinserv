import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import ServiceAboutTwo from "@/components/Section/Service/ServiceAboutTwo"
import serviceData from "@/data/service.json"
import FormRequestTwo from "@/components/Section/FormRequest/FormRequestTwo"
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import Partner from "@/components/Section/Partner/PartnerAbout"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"

export default function AboutStyleTwo() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            img="/images"
            desc=""
            link="About Us"
            title="About Us"
          />
          <AboutTwo />
          <ServiceAboutTwo data={serviceData} />
          <FormRequestTwo
            classname="style-two style-about"
            bgImg="/images/banner/form-cta-about.png"
          />
          <OurTeam />
          <Partner />
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}
