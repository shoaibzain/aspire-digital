import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Faq from "@/components/home/Faq";
export const metadata = {
  title:
    "Digital Marketing in Quetta | Aspire Digital",
  description:
    "Get targeted leads, boost brand awareness, and drive sales with Aspire, digital marketing agency in Quetta. We help to achieve online goals.",
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
