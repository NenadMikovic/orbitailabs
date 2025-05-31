const icon1 = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_67_11301)">
      <path
        d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z"
        fill="url(#paint0_linear_67_11301)"
        fillOpacity="0.08"
      />
      <g filter="url(#filter0_d_67_11301)">
        <path d="M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z" fill="#F3EEFF" />
      </g>
      <path
        d="M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z"
        stroke="#F3EEFF"
        strokeOpacity="0.06"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_67_11301"
        x="3.5"
        y="3"
        width="18"
        height="18"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_67_11301"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_67_11301"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_67_11301"
        x1="12.5"
        y1="0"
        x2="12.5"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3EEFF" stopOpacity="0" />
        <stop offset="1" stopColor="#F3EEFF" />
      </linearGradient>
      <clipPath id="clip0_67_11301">
        <rect width="25" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const OfferItem = ({ text, disabled = false }: { text: string; disabled?: boolean }) => {
  return (
    <li className={`flex items-center gap-5 ${disabled ? "opacity-50" : ""}`}>
      {disabled ? lockedIcon : checkIcon}
      <span className="font-medium text-gray-200">{text}</span>
    </li>
  );
};

const lockedIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12.5" cy="12" r="12" fill="rgba(255,255,255,0.06)" />
    <path
      d="M12.5 7C13.88 7 15 8.12 15 9.5V11H10V9.5C10 8.12 11.12 7 12.5 7Z"
      stroke="#F3EEFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="11"
      width="5"
      height="5"
      rx="1"
      stroke="#F3EEFF"
      strokeWidth="1.5"
    />
  </svg>
);

const checkIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="rgba(0,255,128,0.1)" />
    <path
      d="M8.5 12.5L11 15L16 9"
      stroke="#00FFA3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OfferItem;
