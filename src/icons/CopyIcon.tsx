interface CopyIconProps {
  textToCopy: string
}

export const CopyIcon = ({textToCopy}: CopyIconProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <button onClick={handleCopy} className="inline-flex justify-center items-center ">
      <svg
        strokeWidth="0"
        fill="white"
        viewBox="0 0 24 24"
        height="1.2em"
        width="1.2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
      </svg>
    </button>
  );
};
