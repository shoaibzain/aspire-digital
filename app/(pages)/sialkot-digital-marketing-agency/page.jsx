import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Faq from "@/components/home/Faq";
export const metadata = {
  title:
    "Best Digital Marketing In Sialkot | Aspire Digital",
  description:
    "Best Digital Marketing Agency In Sialkot. We are a full-service marketing agency, specializes in helping businesses like yours to grow online.",
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
