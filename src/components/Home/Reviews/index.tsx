"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import reviewsData from "./reviewsData";

const Reviews = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollContent, setScrollContent] = useState(false);

  const handleScrollContent = () => {
    if (window.scrollY >= 500) {
      setScrollContent(true);
    } else {
      setScrollContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollContent);
  });

  return (
    <>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Echoes from the Network"
          title="Results, Not Promises"
          paragraph="These aren’t testimonials. They’re field reports from traders using the tech in action."
        />
      
        <div className="flex justify-center mt-6">
  <div className="flex items-center gap-4 text-center">
    {/* SVG Logo on the left */}
    <img
  src="/images/reviews/reviews-logo.svg"
  alt="Reviews Logo"
  className="w-14 h-14 text-black dark:text-white"
/>


    {/* Text content */}
    <div>
      <div className="text-xl font-semibold text-black dark:text-white">
        Ratings and Reviews
      </div>
      <div className="flex items-center justify-center gap-1 mt-1">
        <span className="text-2xl font-bold text-black dark:text-white">
          4.7
        </span>
        <div className="flex items-center gap-[2px]">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="h-7 w-7 text-orange-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.5 12.3.5 8.21l6.061-.88L10 2l2.939 5.33 6.061.88-5 4.09 1.378 5.79z" />
            </svg>
          ))}
          {/* Half star */}
          <svg className="h-7 w-7 fill-current" viewBox="0 0 20 20">
            <defs>
              <clipPath id="half-star">
                <rect x="0" y="0" width="10" height="20" />
              </clipPath>
            </defs>
            <path
              d="M10 15l-5.878 3.09L5.5 12.3.5 8.21l6.061-.88L10 2l2.939 5.33 6.061.88-5 4.09 1.378 5.79z"
              fill="#e5e7eb"
            />
            <path
              d="M10 15l-5.878 3.09L5.5 12.3.5 8.21l6.061-.88L10 2l2.939 5.33 6.061.88-5 4.09 1.378 5.79z"
              fill="#f97316"
              clipPath="url(#half-star)"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>


<br />
<p className="mb-4 text-center text-sm text-gray-400">
  This feedback was collected entirely through our automated AI assistant. Want to share yours? Simply start a chat.<br />
  In accordance with GDPR regulations, personal identifiers have been removed to ensure user privacy.
</p><br />


        <div
          className={`grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3 ${
            !showContent ? "max-h-[855px] overflow-hidden" : ""
          }`}
        >
          <div className="space-y-7.5">
            {reviewsData.slice(0, 5).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="hidden space-y-7.5 sm:block">
            {reviewsData.slice(5, 10).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="hidden space-y-7.5 lg:block">
            {reviewsData.slice(10, 15).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-20 flex justify-center bg-linear-to-t from-dark pb-8 pt-32 ${
            scrollContent ? "opacity-100!" : ""
          } ${
            showContent
              ? "-u-mt-52 sticky opacity-0 transition-opacity duration-300"
              : ""
          }`}
        >
          <button
            type="button"
            onClick={() => setShowContent(!showContent)}
            className={`button-border-gradient hover:button-gradient-hover pointer-events-auto relative top-20 mx-auto -mt-7.5 flex rounded-lg px-4.5 py-3 text-sm font-semibold text-white duration-300 ease-in ${
              showContent ? "translate-y-4 transition-transform" : ""
            } ${scrollContent ? "translate-y-0" : ""}`}
          >
            {showContent ? "Collapse Reviews" : "Keep Reading"}
          </button>
        </div>
        
      </div>
      
    </>
    
  );
};
export default Reviews;
