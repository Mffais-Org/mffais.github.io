import { useTranslations } from "next-intl";
import React from "react";

type Section = {
  title: string;
  content: (string | string[])[];
};

const TermsAndConditions = () => {
  const t = useTranslations("termsAndConditions");
  const c = useTranslations("termsAndConditions.content");

  const subsectionKeys = Object.keys(t.raw("content"));

  return (
    <>
      <div className="bg-background py-20">
        <div className="mx-auto w-full max-w-[1312px]">
          <h2 className="px-6 text-[24px] font-bold leading-7 xl:text-[56px] xl:leading-[55px]">
            {t("title")}
          </h2>
        </div>
      </div>
      <div className="mx-auto my-10 max-w-[1312px] px-6">
        {subsectionKeys.map((key) => {
          const section: Section = c.raw(key);

          return (
            <div key={key} className="flex flex-col gap-4">
              <h3 className="mt-4 text-[18px] font-medium leading-6 xl:text-[28px] xl:leading-[36px]">
                {section.title}
              </h3>
              {section.content.map((item, index) => {
                if (typeof item === "string") {
                  return (
                    <div key={index}>
                      <p>{item}</p>
                    </div>
                  );
                } else if (Array.isArray(item)) {
                  return (
                    <ul key={index} className="list-disc pl-6">
                      {item.map((listItem, subIndex) => (
                        <li key={subIndex}>{listItem}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TermsAndConditions;
