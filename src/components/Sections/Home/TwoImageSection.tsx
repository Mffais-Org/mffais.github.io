import { useTranslations } from "next-intl";
import SmileIcon from "../../Icons/SmileIcon";
import useVerticalScroll from "@/hooks/useVerticalScroll";

const TwoImageSection = () => {
  const t = useTranslations("twoImageSection");
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    scrollContainerRef,
  } = useVerticalScroll();

  return (
    <section
      className="mb-10 flex flex-col md:px-0 xl:mb-[124px]"
      onMouseLeave={handleMouseUp}
    >
      <div className="flex w-full flex-col-reverse gap-10 md:items-center xl:mx-auto xl:max-w-[1130px] xl:flex-row xl:items-start xl:gap-20">
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex h-full w-full cursor-grab gap-10 overflow-x-scroll px-6 md:cursor-auto md:justify-center md:overflow-x-visible md:px-0"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <img
            src="/images/TwoImageSectionLeft.png"
            className="pointer-events-none h-full max-w-[250px] xl:max-w-full"
            alt="TwoImageSectionLeft"
          />
          <img
            src="/images/TwoImageSectionRight.png"
            className="pointer-events-none h-full max-w-[250px] xl:max-w-full"
            alt="TwoImageSectionRight"
          />
        </div>
        <div className="flex flex-col items-start px-6 md:max-w-[342px] md:items-center">
          <div className="xl:py-[62px]">
            <SmileIcon className="w-8 xl:w-12" />
          </div>
          <p className="text-[24px] font-bold leading-8 md:text-center xl:text-left xl:text-[40px] xl:leading-[48px]">
            {t("text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;
