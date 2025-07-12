import styled from "@emotion/styled";

const BackgroundWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: url("/assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  filter: contrast(1.2) brightness(0.9) saturate(1.1);

  /* 스캔라인 효과 */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 4px
    );
    animation: scanline-move 0.2s linear infinite;
    mix-blend-mode: multiply;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 3;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
  }

  @keyframes scanline-move {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: 4px;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 4;
`;

const Content = styled.div`
  position: relative;
  z-index: 5;
`;

export default function HomeBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundWrapper>
      <Overlay />
      <Content>{children}</Content>
    </BackgroundWrapper>
  );
}
