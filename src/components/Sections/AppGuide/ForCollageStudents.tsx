import BulbIcon from "@/components/Icons/BulbIcon";
import ForecastIcon from "@/components/Icons/ForecastIcon";
import MonitorIcon from "@/components/Icons/MonitorIcon";
import PiggyBankIcon from "@/components/Icons/PiggyBankIcon";
import StudentIcon from "@/components/Icons/StudentIcon";
import TrackIcon from "@/components/Icons/TrackIcon";
import Badge from "@/components/UI/Badge";
import IconCard from "@/components/UI/IconCard";
import VideoPlayer from "@/components/UI/VideoPlayer";
import { useTranslations } from "next-intl";
import React from "react";

const ForCollageStudents = () => {
  const t = useTranslations("forCollageStudents");
  const c = useTranslations("forCollageStudents.iconCards");

  const IconCardData = [
    {
      id: 1,
      icon: <TrackIcon />,
      title: c("iconCard1.title"),
      description: c("iconCard1.description"),
    },
    {
      id: 2,
      icon: <PiggyBankIcon />,
      title: c("iconCard2.title"),
      description: c("iconCard2.description"),
    },
    {
      id: 3,
      icon: <StudentIcon />,
      title: c("iconCard3.title"),
      description: c("iconCard3.description"),
    },
    {
      id: 4,
      icon: <MonitorIcon />,
      title: c("iconCard4.title"),
      description: c("iconCard4.description"),
    },
    {
      id: 5,
      icon: <ForecastIcon />,
      title: c("iconCard5.title"),
      description: c("iconCard5.description"),
    },
    {
      id: 6,
      icon: <BulbIcon />,
      title: c("iconCard6.title"),
      description: c("iconCard6.description"),
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-[112px] 3xl:px-[]">
      <div className="flex items-center gap-20">
        <div className="flex flex-col">
          <Badge text={t("badge")} className="mb-4" />
          <span className="mb-6 text-[56px] font-bold leading-[67px]">
            {t("title")}
          </span>
          <p className="parag text-[26px] leading-[34px]">{t("text")}</p>
        </div>
        <VideoPlayer
          videoSrc="/videos/finances-video.mp4"
          overlaySrc="/images/StudentsVideoOverlay.png"
        />
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-20">
        {IconCardData.map((data) => (
          <IconCard
            key={data.id}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ForCollageStudents;
