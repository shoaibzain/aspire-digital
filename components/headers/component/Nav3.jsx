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
        <Link href={`/about`}>About</Link>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
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
        </a>
        <div
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="row child-cols-6 g-0 col-match">
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/blog`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Blog</b>
                      <span className="fw-normal">
                        Managing multiple software and tools for different
                        tasks.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    onClick={openNewsletterModal}
                    role="button"
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Newsletter</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-features`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Video Tutorials</b>
                      <span className="fw-normal">
                        Assign tasks, share files, and communicate with your
                        team.
                      </span>
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
                    href={`/page-career`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">We're hiring</b>
                      <span className="fw-normal">
                        Managing multiple software and tools for different
                        tasks.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-contact`}
                  >
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold">Help Center</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      
      <li>
        <Link href={`/`}>Our Portfolio</Link>
      </li>
      <li>
        <Link href={`/page-pricing`}>Blogs</Link>
      </li>
      <li>
        <Link href={`/page-pricing`}>Contact Us</Link>
      </li>
    </>
  );
}
