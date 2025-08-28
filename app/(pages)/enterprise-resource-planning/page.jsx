import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Faq from "@/components/home/Faq";
export const metadata = {
  title:
    "ERP Solutions | Streamline Operations with Aspire Digital.pk",
  description:
    "Explore the world of Enterprise Resource Planning solutions and discover how they can revolutionize your business operations.",
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
