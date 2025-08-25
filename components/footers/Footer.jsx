import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  footerLinks,
  infoLinks,
  socialLinks,
  bottomLinks,
} from "@/data/footer";
import Chatbot from "../chatbot/chatbot";

export default function Footer() {
  return (
    <>
      <Chatbot />
      <footer
        id="uc-footer"
        className="uc-footer panel overflow-hidden uc-dark"
      >
        <div className="footer-outer pb-4 lg:pb-6 dark:bg-gray-800 dark:text-white m-2 rounded-2 lg:rounded-3">
          <div className="uc-footer-content pt-6 lg:pt-8">
            <div className="container xl:max-w-xl">
              <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
                <div className="uc-footer-widgets panel">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <Link href={`/`} style={{ width: 240 }}>
                        <Image
                          className="text-primary"
                          alt="Lexend"
                          src="/assets/images/common/logo-dark.svg"
                          width="180"
                          height="90"
                        />
                      </Link>
                      <ul className="nav-x justify-start gap-2 text-gray-300 mt-3">
                        {socialLinks.map((link, index) => (
                          <li key={index}>
                            <a href={link.href} target="_blank">
                              <i className={`icon icon-2 ${link.iconClass}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {footerLinks.map((section, index) => (
                      <div key={index} className={section.extraClass || ""}>
                        <ul className="nav-y gap-1 fw-regular">
                          <li className="fs-7 text-uppercase dark:text-gray-300">
                            {section.title}
                          </li>
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              {link.isLink ? (
                                <Link href={link.href}>{link.text}</Link>
                              ) : (
                                <a href={link.href}>{link.text}</a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div>
                      {infoLinks.map((section, index) => (
                        <div key={index} className={section.extraClass || ""}>
                          <ul className="nav-y gap-1 fw-regular">
                            <li
                              className={`fs-7 text-uppercase dark:text-gray-300 ${
                                index === 1 ? "mt-3" : ""
                              }`}
                            >
                              {section.title}
                            </li>
                            {section.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                {link.isLink ? (
                                  <Link href={link.href}>{link.text}</Link>
                                ) : (
                                  <a href={link.href}>{link.text}</a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-center pt-4 lg:pt-6 border-top dark:text-white">
                  <p className="opacity-60 md:text-left">
                    Aspire Digital © {new Date().getFullYear()}, All rights
                    reserved.
                  </p>
                  <ul className="nav-x bottomlink gap-1 text-gray-300">
                    {bottomLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className="hover:text-primary">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
