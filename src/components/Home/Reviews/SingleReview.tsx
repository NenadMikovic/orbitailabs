import { Review } from "@/types/review";
import Image from "next/image";

const SingleReview = ({ review }: { review: Review }) => {
  const rating = review.rating ?? 0;
  return (
    <div className="user-border-gradient relative overflow-hidden rounded-[19px] px-8 py-9">
      <div className="flex items-center gap-4.5">
        <div className="relative h-12 w-full max-w-[48px] overflow-hidden rounded-full">
          <Image
            src={review.userImage}
            alt={review.userName}
            width={48}
            height={48}
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-white">{review.userName}</h3>
          <div className="flex items-center gap-[3px] mt-0.5">
  {[...Array(5)].map((_, index) => {
    const full = index + 1 <= Math.floor(rating);
    const half = rating % 1 !== 0 && index + 1 === Math.ceil(rating);

    return (
      <div key={index} className="relative h-4 w-4">
        {/* Empty star (gray background) */}
        <svg
          className="absolute top-0 left-0 h-4 w-4 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.5 12.3.5 8.21l6.061-.88L10 2l2.939 5.33 6.061.88-5 4.09 1.378 5.79z" />
        </svg>

        {/* Full or half star (orange overlay) */}
        {(full || half) && (
          <svg
            className="absolute top-0 left-0 h-4 w-4 text-orange-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <clipPath id={`clip-${index}`}>
                <rect
                  x="0"
                  y="0"
                  width={full ? "20" : "10"} // Half = 10, Full = 20
                  height="20"
                />
              </clipPath>
            </defs>
            <path
              clipPath={`url(#clip-${index})`}
              d="M10 15l-5.878 3.09L5.5 12.3.5 8.21l6.061-.88L10 2l2.939 5.33 6.061.88-5 4.09 1.378 5.79z"
            />
          </svg>
        )}
      </div>
    );
  })}
</div>




        </div>
      </div>

      <div className="user-divider relative my-6 h-[1px] w-full"></div>

      <p>{review.description}</p>

      {/* <!-- bg shapes --> */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute bottom-0 right-0 -z-1 h-full w-full bg-[url(/images/blur/blur-18.svg)] bg-cover bg-center bg-no-repeat"></span>
      </div>
    </div>
  );
};

export default SingleReview;
