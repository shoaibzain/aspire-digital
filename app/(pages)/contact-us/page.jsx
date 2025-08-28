import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/home/Faq";
export const metadata = {
  title: "Karachi Digital Marketing Agency | Contact Us",
  description: "Contact a Karachi digital marketing agency. Our team will help you enhance your online presence and achieve your business goals.",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}
