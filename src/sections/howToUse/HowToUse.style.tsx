import styled from "@emotion/styled";
import { devices } from "../../parameters/general";

export const MainContainer = styled.section`
  height: 816px;
  padding: 0;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  @media ${devices.laptop} {
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
  padding-right: 10vw;
  padding-top: 20px;
  margin-bottom: -40px;

  z-index: 10000;
`;

export const SingleArrow = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00000014;
  cursor: pointer;
`;

export const EmptyCard = styled.div`
  min-width: 10vw;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  overflow: scroll;
  padding: 80px 40px 80px 0;
`;

export const SingleCard = styled.div`
  min-width: 372px;
  box-sizing: border-box;
  border-radius: 12px;
  height: 358px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 8px 12px 60px 0px #00000040;
`;

export const CardTitle = styled.span`
  font-size: 24px;
  line-height: 30px;

  @media ${devices.laptop} {
    font-size: 26px;
    font-weight: 500;
    line-height: 30px;
  }
`;

export const CardDesc = styled.span`
  font-size: 16px;
  line-height: 30px;

  @media ${devices.laptop} {
    font-size: 20px;
    line-height: 34px;
  }
`;
