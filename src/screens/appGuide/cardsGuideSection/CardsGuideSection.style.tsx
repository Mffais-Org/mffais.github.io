import styled from "@emotion/styled";
import { devices } from "../../../parameters/general";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #f0f2f7;
  padding: 40px 0px;
  width: 100vw;

  @media ${devices.laptop} {
    padding: 100px 0px;
    gap: 36px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1312px;
  margin: auto;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const MainCardContainer = styled.div`
  padding: 40px 40px 0 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
  border-radius: 28px;
  margin: 0 24px;
  overflow: hidden;
  @media ${devices.laptop} {
    margin: unset;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  @media ${devices.laptop} {
    font-size: 26px;
  }
`;
export const Description = styled.span`
  font-size: 16px;
  @media ${devices.laptop} {
    font-size: 20px;
  }
`;
