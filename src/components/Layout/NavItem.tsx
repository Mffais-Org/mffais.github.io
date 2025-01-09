import React from "react";
import { useSpring, animated } from "@react-spring/web";

type NavItemProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
  href?: string;
};

export default function NavItem({ name, isActive, onClick }: NavItemProps) {
  const underlineStyle = useSpring({
    transform: isActive ? "scaleX(1)" : "scaleX(0)",
    opacity: isActive ? 1 : 0,
    transformOrigin: "left center",
    config: {
      tension: 400,
      friction: 30,
    },
  });
  const underlineStatic: React.CSSProperties = {
    position: "absolute",
    bottom: "-12px",
    height: "1px",
    width: "60px",
    backgroundColor: "#ffd30d",
    transformOrigin: "left center",
  };

  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center"
    >
      <span>{name}</span>
      <animated.span style={{ ...underlineStyle, ...underlineStatic }} />
    </button>
  );
}
