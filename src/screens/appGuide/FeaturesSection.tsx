import React from "react";
import { AppGuideData } from "../../data";
import {
  BottomFeaturesContainer,
  Chip,
  FeaturesContainer,
  FeaturesContainer2,
  FeaturesMainContainer,
  FeaturesSubTitle,
  FeaturesTitle,
  SingleFeature,
  SingleFeatureLogo,
  SingleFeatureSubtitle,
  SingleFeatureTitle,
  TitleSubtitleContainer,
  TopFeaturesContainer,
  VideoContainer,
} from "./AppGuideScreen.style";

export const FeaturesSection = () => {
  const data = AppGuideData;

  return (
    <FeaturesMainContainer>
      <FeaturesContainer>
        <TopFeaturesContainer>
          <TitleSubtitleContainer>
            <Chip>{data.topSection.chipTitle}</Chip>
            <FeaturesTitle>{data.topSection.title}</FeaturesTitle>
            <FeaturesSubTitle>{data.topSection.subtitle}</FeaturesSubTitle>
          </TitleSubtitleContainer>
          <VideoContainer>
            <img
              src="/img/videoTestImage.png"
              className="app-store"
              style={{ width: "100%", height: "100%" }}
            />
          </VideoContainer>
        </TopFeaturesContainer>
        <BottomFeaturesContainer>
          {data.topSection.features.map((feature) => (
            <SingleFeature>
              <SingleFeatureLogo>{feature.logo}</SingleFeatureLogo>
              <SingleFeatureTitle>{feature.title}</SingleFeatureTitle>
              <SingleFeatureSubtitle>{feature.subtitle}</SingleFeatureSubtitle>
            </SingleFeature>
          ))}
        </BottomFeaturesContainer>
      </FeaturesContainer>
      <FeaturesContainer2>
        <TopFeaturesContainer>
          <VideoContainer>
            <img
              src="/img/videoTestImage.png"
              className="app-store"
              style={{ width: "100%", height: "100%" }}
            />
          </VideoContainer>
          <TitleSubtitleContainer>
            <Chip>{data.bottomSection.chipTitle}</Chip>
            <FeaturesTitle>{data.bottomSection.title}</FeaturesTitle>
            <FeaturesSubTitle>{data.bottomSection.subtitle}</FeaturesSubTitle>
          </TitleSubtitleContainer>
        </TopFeaturesContainer>
        <BottomFeaturesContainer>
          {data.bottomSection.features.map((feature) => (
            <SingleFeature>
              <SingleFeatureLogo>{feature.logo}</SingleFeatureLogo>
              <SingleFeatureTitle>{feature.title}</SingleFeatureTitle>
              <SingleFeatureSubtitle>{feature.subtitle}</SingleFeatureSubtitle>
            </SingleFeature>
          ))}
        </BottomFeaturesContainer>
      </FeaturesContainer2>
    </FeaturesMainContainer>
  );
};
