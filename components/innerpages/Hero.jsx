import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="hero section panel overflow-hidden">
      <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900"></div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-9">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-black dark:text-white">
                Web Development Services in{" "}
                <span className="text-primary">Karachi</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                First impressions matter especially online. At Aspire Digital,
                we offer Web Development Services in Karachi that help your
                brand stand out instantly. Imagine walking into a sleek, modern
                store where everything is organized that’s exactly what your
                website should feel like. As the Best Website Development Agency
                in Pakistan, we blend creativity with strategy to build websites
                that are both visually striking and highly functional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/page-career`}
                  className="btn btn-md lg:btn-lg btn-primary text-white mt-1 xl:mt-2"
                >
                  Start Your Project
                </Link>
                <Link
                  href={`/page-career`}
                  className="btn btn-md lg:btn-lg border text-primary hover:text-white hover:!bg-[#ffb91f] dark:bg-white mt-1 xl:mt-2"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
