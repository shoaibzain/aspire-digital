import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Faq from "@/components/home/Faq";
export const metadata = {
  title:
    "Case Studies",
  description:
    "Case Studies",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Faq />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
