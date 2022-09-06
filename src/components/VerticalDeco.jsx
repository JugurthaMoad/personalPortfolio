const VerticalDeco = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 5 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 153C1.11929 153 0 151.732 0 150.167L0 2.83318C0 1.26846 1.11929 -6.27406e-06 2.5 -6.27406e-06C3.88071 -6.27406e-06 5 1.26846 5 2.83318L5 150.167C5 151.732 3.88071 153 2.5 153Z"
        fill="url(#paint0_diamond_65_23)"
      />
      <defs>
        <radialGradient
          id="paint0_diamond_65_23"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.50008 76.4999) rotate(-136.226) scale(42.5859 3993.74)"
        >
          <stop stopColor="#1E1C1C" />
          <stop offset="0.177138" stopColor="#359550" stopOpacity="0.87" />
          <stop offset="0.713528" stopColor="#992E27" stopOpacity="0.877778" />
          <stop offset="0.713628" stopColor="#BC332A" />
          <stop offset="1" stopColor="#B81F3B" stopOpacity="0.87" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default VerticalDeco;
