import Header2 from "@/components/headers/Header2";
import Footer from "@/components/footers/Footer";
import About from "@/components/innerpages/About";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title: "Top Surprising Facts About Karachi’s #1 Digital Marketing Agency",
  description: "Unlock Top game-changing digital marketing solutions with Aspire Digital – Karachi’s top agency for affordable, expert, and result-driven brand growth!",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <About />

          <About2 />
          <AboutValues />

          <Cta />
        </div>
        <Footer />
      </div>
    </>
  );
}
