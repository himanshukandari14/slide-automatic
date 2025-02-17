import type React from "react";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const LogoSmall: React.FC<Props> = ({
  width = 116,
  height = 61,
  color = "#3B82F6",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 30C10 24.4772 14.4772 20 20 20C25.5228 20 30 15.5228 30 10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30 30C30 25.5817 26.4183 22 22 22C17.5817 22 14 18.4183 14 14"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="4" />
    </svg>
  );
};

export default LogoSmall;
