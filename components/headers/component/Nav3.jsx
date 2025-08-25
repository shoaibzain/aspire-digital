"use client";
import Link from "next/link";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
export default function Nav3() {
  return (
    <>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/about-us`}>About</Link>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <Link href="/our-services" role="button" aria-haspopup="true">
          Our Services{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </Link>
        <div
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="row child-cols-6 g-0 col-match">
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="text-black hover:!text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/website-design-development-services-in-karachi`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Website Design</b>
                    </span>
                  </Link>
                </li>
                <li>
                   <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/designing-services`}
                    role="button"
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Designing Services</b>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/seo-services-in-karachi`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">SEO Services</b>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/digital-marketing`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Digital Marketing</b>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/creative-content-writing-services-in-karachi`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Creative Content Writing</b>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/social-media-marketing-services-in-karachi`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Social Media Marketing</b>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/enterprise-resource-planning`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Enterprise Resource Planning</b>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      
      <li>
        <Link href={`/case-studies`}>Case Studies</Link>
      </li>
      <li>
        <Link href={`/blogs`}>Blogs</Link>
      </li>
      <li>
        <Link href={`/contact-us`}>Contact Us</Link>
      </li>
    </>
  );
}
