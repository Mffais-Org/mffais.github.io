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

const LinkButton = ({ variant = "primary", children, href, className, icon, target = "" }: Props) => {
  if (variant === "primary") {
    return (
      <Link target={target} className={twMerge("bg-primaryYellow px-6 flex items-center h-12 rounded-xl font-medium text-sm border-[0.5px] border-[rgba(0,0,0,0.08)] transition duration-200 ease-in hover:text-font hover:shadow-custom", className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <Link target={target} className={twMerge("flex gap-[10px] items-center px-6 font-medium h-12 border-2 border-primaryYellow rounded-xl transition duration-200 ease-in hover:text-font hover:shadow-custom  ", className)} href={href}>
      <span>{children}</span>
      <div>{icon}</div>
    </Link>
  );
};

export default LinkButton;
