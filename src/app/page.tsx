"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const locale = window.navigator.language;
      redirect(`/${locale}`);
    }
  }, []);

  return null;
};

export default Page;
