const CvIcon = ({ handleClick, ...props }) => {
  return (
    <svg
      onClick={handleClick}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="2.5em"
      height="2.5em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 20 20"
    >
      <g fill="#b5b5b6">
        <path d="M17.333 5.947a1.749 1.749 0 0 0-.513-1.287l-3.48-3.48a1.79 1.79 0 0 0-1.247-.513H4C3.267.667 2.667 1.26 2.667 2v16c0 .733.6 1.333 1.333 1.333h12c.733 0 1.333-.6 1.333-1.333V5.947Zm-5-2.94l2.66 2.66h-2.66v-2.66Zm3 14.326H4.667V2.667h5.666v3.24c0 .966.787 1.76 1.76 1.76h3.24v9.666Z" />
        <path d="M8.002 6.8a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133Z" />
        <path
          fillRule="evenodd"
          d="M10.133 9.111c0-1.134-.954-1.955-2.133-1.955c-1.178 0-2.133.82-2.133 1.955v.533a.356.356 0 0 0 .356.356h3.555a.356.356 0 0 0 .355-.356v-.533ZM6.167 12.5a.5.5 0 0 1 .5-.5h6.666a.5.5 0 0 1 0 1H6.667a.5.5 0 0 1-.5-.5Zm0 2.333a.5.5 0 0 1 .5-.5h6.666a.5.5 0 1 1 0 1H6.667a.5.5 0 0 1-.5-.5Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default CvIcon;
