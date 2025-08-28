import Header2 from "@/components/headers/Header2";
import Footer from "@/components/footers/Footer";
import Faq from "@/components/innerpages/Faq";
import Hero from "@/components/innerpages/Hero";
import Process from "@/components/innerpages/Process";
import ServicesList from "@/components/innerpages/ServicesList";
import Cta from "@/components/innerpages/Cta";
import Features from "@/components/innerpages/Features";
import Portfolio from "@/components/home/Portfolio";
import Facts from "@/components/innerpages/Facts";
export const metadata = {
  title: "Top Web Design & Development Services in Karachi Unveiled",
  description:
    "Unlock Top powerful web design & development services in Karachi with Aspire Digital — boost your online presence and stand out from the competition today!",
};
export default function Page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
             <Portfolio />
          <Process />
          <Facts/>
          <ServicesList />
          <Cta />
          <Faq
            faqType="accordionItemsWebDesignKarachi"
            description="To make the most informed decision for your business, we have answered related to <b>Ecommerce Website Development Karachi</b> common questions."
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
