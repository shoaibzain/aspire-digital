"use client";
import { useEffect, useRef, useState } from "react";

export default function Accordion({ faqData = [], parentClass = "" }) {
  // normalize items so the component can accept different shapes
  const items = (faqData || []).map((it) => {
    if (!it) return { question: "", answer: "" };
    if (it.question !== undefined || it.answer !== undefined) {
      return { ...it, question: it.question ?? "", answer: it.answer ?? "" };
    }
    if (it.title !== undefined || it.content !== undefined) {
      return { ...it, question: it.title ?? "", answer: it.content ?? "" };
    }
    // fallback: stringify
    return { question: String(it), answer: "" };
  });
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = (faqData || []).findIndex((x) => x && (x.expanded || x.isOpen));
    if (idx !== -1) return idx;
    return items.length ? 0 : -1;
  });
  useEffect(() => {
    questionRefs.current.forEach((el) => {
      if (!el) return;
      el.classList.remove("active");
    });
    parentRefs.current.forEach((el) => {
      if (!el) return;
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      if (!el) return;
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginTop = "0px";
    });
    if (currentIndex !== -1) {
      const qEl = questionRefs.current[currentIndex];
      const pEl = parentRefs.current[currentIndex];
      const element = answerRefs.current[currentIndex];
      if (qEl) qEl.classList.add("active");
      if (pEl) pEl.classList.add("active");
      if (element) {
        element.style.height = element.scrollHeight + "px";
        element.style.overflow = "hidden";
        element.style.transition = "all 0.5s ease-in-out";
        element.style.marginTop = "20px";
      }
    }
  }, [currentIndex]);

  return (
    <>
      {items.map((item, index) => (
        <li
          ref={(el) => (parentRefs.current[index] = el)}
          className={`${
            currentIndex == index ? "uc-open" : ""
          } ${parentClass} `}
          onClick={() => {
            setCurrentIndex((pre) => (pre == index ? -1 : index));
          }}
          key={index}
        >
          <a
            className="uc-accordion-title fs-5 sm:fs-4"
            role="button"
            aria-disabled="false"
            ref={(el) => (questionRefs.current[index] = el)}
          >
            {item.question}
          </a>
          <div
            className="uc-accordion-content"
            ref={(el) => (answerRefs.current[index] = el)}
          >
            {Array.isArray(item.answer) ? (
              item.answer.map((block, i) => {
                if (block.type === "paragraph") {
                  return <p key={i}>{block.content}</p>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="list-disc pl-6">
                      {block.items.map((li, j) => (
                        <li key={j}>{li}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })
            ) : (
              <p>{item.answer}</p>
            )}
          </div>
        </li>
      ))}
    </>
  );
}
