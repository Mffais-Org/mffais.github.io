import { Link } from "@/i18n/routing";
import React, { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type Props =
  | {
      variant?: "primary";
      icon?: React.ReactNode;
      children: React.ReactNode;
      href: string;
      className?: HTMLProps<HTMLAnchorElement>["className"];
      target?: HTMLProps<HTMLAnchorElement>["target"];
    }
  | {
      variant: "icon";
      icon: React.ReactNode;
      children: React.ReactNode;
      href: string;
      className?: HTMLProps<HTMLAnchorElement>["className"];
      target?: HTMLProps<HTMLAnchorElement>["target"];
    };

const LinkButton = ({
  variant = "primary",
  children,
  href,
  className,
  icon,
  target = "",
}: Props) => {
  if (variant === "primary") {
    return (
      <Link
        target={target}
        className={twMerge(
          "hover:shadow-custom flex h-12 items-center whitespace-nowrap rounded-xl border-[0.5px] border-[rgba(0,0,0,0.08)] bg-primaryYellow px-6 text-sm font-medium transition duration-200 ease-in hover:text-font",
          className,
        )}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      target={target}
      className={twMerge(
        "hover:shadow-custom flex h-12 items-center gap-[10px] rounded-xl border-2 border-primaryYellow px-6 font-medium transition duration-200 ease-in hover:text-font",
        className,
      )}
      href={href}
    >
      <span>{children}</span>
      <div>{icon}</div>
    </Link>
  );
};

export default LinkButton;
