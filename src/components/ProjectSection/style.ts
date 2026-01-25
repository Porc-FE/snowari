import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  height: 100dvh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  overflow: hidden;
  padding: 0 2rem;
`;

export const ContentLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 3rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  max-height: 80dvh;
`;

export const ProjectImage = styled.img`
  width: 80%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  color: #fff;
`;

export const ProjectTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

export const ProjectText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: #ccc;
`;
