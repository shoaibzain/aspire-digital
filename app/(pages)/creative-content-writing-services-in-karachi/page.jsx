import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Faq from "@/components/innerpages/Faq";
export const metadata = {
  title: "Top Content Writing Services In Karachi - Aspire Digital",
  description:
    "Enhance your brand with creative content writing services in Karachi from Aspire Digital. Visit Aspire Digital for more info.",
};
export default function Page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Faq
            faqType="accordionItemscontentwriting"
            description="To make the most informed decision for your business, we have answered some of the most common content development services Karachi questions."
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
