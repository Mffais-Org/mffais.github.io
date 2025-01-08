import Badge from "@/components/UI/Badge";
import { useTranslations } from "next-intl";
import React from "react";

const ForCollageStudents = () => {
  const t = useTranslations("forCollageStudents");
  return (
    <section className="flex flex-col gap-20 items-center px-16 py-[112px] ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Badge text={t("badge")} />
        </div>
        <video src="/videos/finances-video.mp4" />
      </div>
    </section>
  );
};

export default ForCollageStudents;
