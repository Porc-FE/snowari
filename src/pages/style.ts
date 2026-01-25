import styled from "@emotion/styled";

export const InfoBox = styled.div`
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 5.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const SubTitle = styled.p`
  font-size: 5rem;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 8.75rem;
  color: #fff;
  line-height: 5rem;
  font-weight: 600;
`;
