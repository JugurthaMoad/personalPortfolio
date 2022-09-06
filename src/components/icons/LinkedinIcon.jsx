const LinkedinIcon = ({ handleClick, ...props }) => {
  return (
    <svg
      onClick={handleClick}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="2.5em"
      height="2.5em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <g fill="#b5b5b6">
        <path d="M19.515 11.952c-.678 0-1.18.171-1.573.387c-.063-.224-.27-.388-.514-.339h-2.984c-.295-.049-.534.19-.443.5v11c-.091.28.148.52.443.5h2.984c.295.02.534-.22.534-.515l-.001-6.648c-.001-.003-.012-.321.189-.54c.161-.174.438-.263.821-.263c.638 0 .922.261 1.028.845v6.606c-.105.295.134.535.429.515h3.145c.295.02.534-.22.428-.515v-6.828c.105-3.472-2.368-4.705-4.486-4.705zM23.038 23h-2.076v-6.121c0-1.181-.763-1.913-1.99-1.913c-.694 0-1.234.204-1.606.606c-.517.56-.477 1.27-.366 1.428v6h-2.022v-9.98h1.916v.336a.532.532 0 0 0 .86.423l.14-.108c.405-.319.824-.65 1.622-.65c.826 0 3.523.263 3.523 3.637V23zM11 6.966c-1.122 0-2.034.912-2.034 2.034s.912 2.034 2.034 2.034s2.034-.912 2.034-2.034S12.122 6.966 11 6.966zm0 3c-.532 0-.966-.434-.966-.966s.434-.966.966-.966s.966.434.966.966s-.434.966-.966.966zm1.428 1.985H9.46c-.295 0-.534.239-.46.549v11c-.074.28.165.52.46.5h2.968c.295.02.534-.22.534-.515v-11a.534.534 0 0 0-.534-.534zM12 23H9.994v-9.98H12V23z" />
        <path d="M16-.034C7.158-.034-.034 7.158-.034 16S7.158 32.034 16 32.034S32.034 24.842 32.034 16S24.842-.034 16-.034zm0 31C7.748 30.966 1.034 24.252 1.034 16S7.748 1.034 16 1.034S30.966 7.748 30.966 16S24.252 30.966 16 30.966z" />
      </g>
    </svg>
  );
};

export default LinkedinIcon;
