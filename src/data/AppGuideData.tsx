import { ReactNode } from "react";
import {
  FeatureIcon1,
  FeatureIcon10,
  FeatureIcon11,
  FeatureIcon12,
  FeatureIcon2,
  FeatureIcon3,
  FeatureIcon4,
  FeatureIcon5,
  FeatureIcon6,
  FeatureIcon7,
  FeatureIcon8,
  FeatureIcon9,
} from "../icons";
import React from "react";
import { useTranslation } from "react-i18next";

interface data {
  topSection: {
    chipTitle: string;
    title: string;
    subtitle: string;

    features: {
      logo: ReactNode;
      title: string;
      subtitle: string;
    }[];
  };
  bottomSection: {
    chipTitle: string;
    title: string;
    subtitle: string;

    features: {
      logo: ReactNode;
      title: string;
      subtitle: string;
    }[];
  };
}

export const AppGuideData = () => {
  const { t } = useTranslation();
  return {
    topSection: {
      chipTitle: t("appGuide.feature1Chip"),
      title: t("appGuide.feature1Title"),
      subtitle: t("appGuide.feature1Desc"),
      features: [
        {
          logo: <FeatureIcon1 />,
          title: t("appGuide.feature1Card1Title"),
          subtitle: t("appGuide.feature1Card1Desc"),
        },
        {
          logo: <FeatureIcon2 />,
          title: t("appGuide.feature1Card2Title"),
          subtitle: t("appGuide.feature1Card2Desc"),
        },
        {
          logo: <FeatureIcon3 />,
          title: t("appGuide.feature1Card3Title"),
          subtitle: t("appGuide.feature1Card3Desc"),
        },
        {
          logo: <FeatureIcon4 />,
          title: t("appGuide.feature1Card4Title"),
          subtitle: t("appGuide.feature1Card4Desc"),
        },
        {
          logo: <FeatureIcon5 />,
          title: t("appGuide.feature1Card5Title"),
          subtitle: t("appGuide.feature1Card5Desc"),
        },
        {
          logo: <FeatureIcon6 />,
          title: t("appGuide.feature1Card6Title"),
          subtitle: t("appGuide.feature1Card6Desc"),
        },
      ],
    },
    bottomSection: {
      chipTitle: t("appGuide.feature2Chip"),
      title: t("appGuide.feature2Title"),
      subtitle: t("appGuide.feature2Desc"),
      features: [
        {
          logo: <FeatureIcon7 />,
          title: t("appGuide.feature2Card1Title"),
          subtitle: t("appGuide.feature2Card1Desc"),
        },
        {
          logo: <FeatureIcon8 />,
          title: t("appGuide.feature2Card2Title"),
          subtitle: t("appGuide.feature2Card2Desc"),
        },
        {
          logo: <FeatureIcon9 />,
          title: t("appGuide.feature2Card3Title"),
          subtitle: t("appGuide.feature2Card3Desc"),
        },
        {
          logo: <FeatureIcon10 />,
          title: t("appGuide.feature2Card4Title"),
          subtitle: t("appGuide.feature2Card4Desc"),
        },
        {
          logo: <FeatureIcon11 />,
          title: t("appGuide.feature2Card5Title"),
          subtitle: t("appGuide.feature2Card5Desc"),
        },
        {
          logo: <FeatureIcon12 />,
          title: t("appGuide.feature2Card6Title"),
          subtitle: t("appGuide.feature2Card6Desc"),
        },
      ],
    },
  };
};
