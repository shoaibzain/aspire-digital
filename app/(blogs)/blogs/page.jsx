import Header2 from "@/components/headers/Header2";

import Footer from "@/components/footers/Footer";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs6 from "@/components/blog/Blogs6";
export const metadata = {
  title:
    "Digital Marketing Insights | Blog",
  description:
    "Stay updated with the latest trends, tips, and digital marketing insights. Explore our blog for expert advice and practical strategies.",
};
export default function Blog3ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">


          <BreadCumb />
          <Blogs6 />
          <Newsletter />
        </div>
        <Footer />
      </div>
    </>
  );
}
