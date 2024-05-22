import styled from "@emotion/styled";
import { devices } from "../../parameters/general";

export const MainContainer = styled.div`
  color: #1f1f1f;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
  @media ${devices.laptop} {
    padding: 80px 24px;
  }
`;

export const MainWrapper = styled.div`
  max-width: 1312px;
  display: flex;
  flex-direction: column;
  gap: 200px;
  align-items: center;
  @media ${devices.laptop} {
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 960px;
  width: 100%;
  align-items: flex-start;
  @media ${devices.laptop} {
    gap: 40px;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 8px;
  font-size: 44px;
  font-weight: bold;
  @media ${devices.laptop} {
    font-size: 72px;
    gap: 16px;
    text-align: center;
  }
`;

export const SubTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  @media ${devices.laptop} {
    font-size: 40px;
    line-height: 60px;
    font-weight: bold;
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  height: 38px;
  width: 38px;
  @media ${devices.laptop} {
    width: 64px;
    height: 64px;
  }
`;

export const FeaturesMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media ${devices.laptop} {
    gap: 224px;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${devices.laptop} {
    gap: 80px;
  }
`;

export const FeaturesContainer2 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  @media ${devices.laptop} {
    gap: 80px;
    flex-direction: column;
  }
`;

export const TopFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media ${devices.laptop} {
    flex-direction: row;
    gap: 80px;
  }
`;

export const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media ${devices.laptop} {
    width: 50%;
  }
`;

export const Chip = styled.div`
  background-color: #e1e7fe;
  color: #0027f9;
  border-radius: 50px;
  padding: 6px 8px;
  width: fit-content;
  @media ${devices.laptop} {
  }
`;

export const FeaturesTitle = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  @media ${devices.laptop} {
    font-size: 56px;
    line-height: 68px;
  }
`;

export const FeaturesSubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  @media ${devices.laptop} {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  @media ${devices.laptop} {
    width: 50%;
  }
`;

export const BottomFeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
  flex-direction: column;
  @media ${devices.laptop} {
    gap: 32px;
    flex-direction: row;
  }
`;

export const SingleFeature = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media ${devices.laptop} {
    width: 31%;
    gap: 24px;
  }
`;

export const SingleFeatureLogo = styled.div`
  width: 40px;
  @media ${devices.laptop} {
    width: 64px;
  }
`;

export const SingleFeatureTitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  @media ${devices.laptop} {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const SingleFeatureSubtitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  @media ${devices.laptop} {
    font-size: 20px;
    line-height: 34px;
  }
`;
