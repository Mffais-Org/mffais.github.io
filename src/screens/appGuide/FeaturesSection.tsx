import React from "react";
import { AppGuideData } from "../../data";
import {
  BottomFeaturesContainer,
  Chip,
  FeaturesContainer,
  FeaturesMainContainer,
  FeaturesSubTitle,
  FeaturesTitle,
  SingleFeature,
  SingleFeatureLogo,
  SingleFeatureSubtitle,
  SingleFeatureTitle,
  TitleSubtitleContainer,
  TopFeaturesContainer,
  TopFeaturesContainer2,
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
            <video
              poster="/img/finances-video-thumbnail.png"
              controls
              src="/video/finances-video.mp4"
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
      <FeaturesContainer>
        <TopFeaturesContainer2>
          <VideoContainer>
            <video
              poster="/img/income-video-thumbnail.png"
              controls
              src="/video/income-video.mp4"
              style={{ width: "100%", height: "100%" }}
            />
          </VideoContainer>
          <TitleSubtitleContainer>
            <Chip>{data.bottomSection.chipTitle}</Chip>
            <FeaturesTitle>{data.bottomSection.title}</FeaturesTitle>
            <FeaturesSubTitle>{data.bottomSection.subtitle}</FeaturesSubTitle>
          </TitleSubtitleContainer>
        </TopFeaturesContainer2>
        <BottomFeaturesContainer>
          {data.bottomSection.features.map((feature) => (
            <SingleFeature key={feature.title}>
              <SingleFeatureLogo>{feature.logo}</SingleFeatureLogo>
              <SingleFeatureTitle>{feature.title}</SingleFeatureTitle>
              <SingleFeatureSubtitle>{feature.subtitle}</SingleFeatureSubtitle>
            </SingleFeature>
          ))}
        </BottomFeaturesContainer>
      </FeaturesContainer>
    </FeaturesMainContainer>
  );
};
