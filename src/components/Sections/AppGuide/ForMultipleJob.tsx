import BillIcon from "@/components/Icons/BillIcon";
import ChartIcon from "@/components/Icons/ChartIcon";
import CoinIcon from "@/components/Icons/CoinIcon";
import PiggyBankIcon from "@/components/Icons/PiggyBankIcon";
import ScaleIcon from "@/components/Icons/ScaleIcon";
import TvIcon from "@/components/Icons/TvIcon";
import Badge from "@/components/UI/Badge";
import IconCard from "@/components/UI/IconCard";
import VideoPlayer from "@/components/UI/VideoPlayer";
import { useTranslations } from "next-intl";
import React from "react";

const ForMultipleJob = () => {
  const t = useTranslations("forMultipleJob");
  const c = useTranslations("forMultipleJob.iconCards");

  const IconCardData = [
    {
      id: 1,
      icon: <CoinIcon />,
      title: c("iconCard1.title"),
      description: c("iconCard1.description"),
    },
    {
      id: 2,
      icon: <ScaleIcon />,
      title: c("iconCard2.title"),
      description: c("iconCard2.description"),
    },
    {
      id: 3,
      icon: <BillIcon />,
      title: c("iconCard3.title"),
      description: c("iconCard3.description"),
    },
    {
      id: 4,
      icon: <PiggyBankIcon />,
      title: c("iconCard4.title"),
      description: c("iconCard4.description"),
    },
    {
      id: 5,
      icon: <ChartIcon />,
      title: c("iconCard5.title"),
      description: c("iconCard5.description"),
    },
    {
      id: 6,
      icon: <TvIcon />,
      title: c("iconCard6.title"),
      description: c("iconCard6.description"),
    },
  ];

  return (
    <section className="flex flex-col gap-20 items-center px-16 3xl:px-[] py-[112px] ">
      <div className="flex items-center gap-20 ">
        <VideoPlayer videoSrc="/videos/income-video.mp4" overlaySrc="/images/IncomeVideoOverlay.png" />
        <div className="flex flex-col">
          <Badge text={t("badge")} className="mb-4" />
          <span className="text-[56px] leading-[67px] font-bold mb-6">{t("title")}</span>
          <p className="text-[26px] leading-[34px] parag">{t("text")}</p>
        </div>
      </div>
      <div className=" grid grid-cols-3  gap-x-8 gap-y-20">
        {IconCardData.map(data => (
          <IconCard key={data.id} icon={data.icon} title={data.title} description={data.description} />
        ))}
      </div>
    </section>
  );
};

export default ForMultipleJob;
