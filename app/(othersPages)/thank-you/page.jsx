import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Privacy from "@/components/otherPages/Privacy";
export const metadata = {
  title:
    "privacy policy",
  description:
    "privacy policy",
};
export default function PrivacyPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Privacy />
        </div>
        <Footer />
      </div>
    </>
  );
}
