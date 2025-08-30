import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  border?: boolean;
  padding?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  shadow = true,
  border = true,
  padding = "py-2 sm:py-4 md:py-5 px-1",
}) => {
  return (
    <div
      className={classNames(
        "bg-white/90 rounded-2xl flex flex-col items-center w-full max-w-full sm:max-w-sm md:max-w-full min-h-0 h-auto md:h-full relative animate-fade-in",
        shadow && "shadow-lg",
        border && "border border-emerald-100",
        padding,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
