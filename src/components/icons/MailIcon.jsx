const MailIcon = ({ handleClick, ...props }) => {
  return (
    <svg
      onClick={handleClick}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h9A2.5 2.5 0 0 1 18 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 12.5v-7Zm6.746 4.431L5 6.961V12.5A1.5 1.5 0 0 0 6.5 14h9a1.5 1.5 0 0 0 1.5-1.5V6.963l-5.746 2.968l-.082.038a.5.5 0 0 1-.426-.038ZM15.5 4h-9A1.5 1.5 0 0 0 5 5.5v.301l6 3.119l6-3.118V5.5A1.5 1.5 0 0 0 15.5 4Zm-2 13c.818 0 1.544-.393 2-1h-9A3.5 3.5 0 0 1 3 12.5v-7c-.607.456-1 1.182-1 2v5A4.5 4.5 0 0 0 6.5 17h7Z"
      />
    </svg>
  );
};

export default MailIcon;
