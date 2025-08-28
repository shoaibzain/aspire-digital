import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Faq from "@/components/home/Faq";
export const metadata = {
  title:
    "Digital Marketing For Logistics Company - Aspire Digital",
  description:
    "Expand your logistics business with Aspire Digital Marketing For Logistics a smart solution to boost visibility, attract more clients, and grow online.",
};
export default function Page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}
