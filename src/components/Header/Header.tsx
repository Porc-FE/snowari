import styled from "@emotion/styled";
import randomChar from "../../utils/randomChar";
import { useEffect, useState } from "react";
import getCurrentTime from "../../utils/getCurrentTime";

const HeaderWrapper = styled.div`
  padding: 20px 80px;
  text-align: center;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  color: #fff;

  margin: 0 auto;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 3.5rem;
`;

const Time = styled.h3`
  font-size: 2.5rem;
`;

const Menu = styled.ul`
  display: flex;
  text-align: right;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 2.5rem;
  transition: color 0.2s;
  min-width: 180px;
  position: relative;
`;

const BlinkingDot = styled.span<{ visible: boolean }>`
  display: inline-block;
  width: 0.3em;
  height: 0.3em;
  margin-right: 0.6em;
  border-radius: 50%;
  background: red;
  vertical-align: middle;
  box-shadow: 0 0 8px 2px rgba(255, 0, 0, 0.25);
  opacity: ${({ visible }) => (visible ? 1 : 0.2)};
  transition: opacity 0.2s;
`;

function AlienTextEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (isAnimating) {
      let iteration = 0;
      const maxIterations = text.length * 3;

      const animate = () => {
        if (iteration < maxIterations) {
          const newText = text
            .split("")
            .map((char, idx) => {
              if (idx < Math.floor(iteration / 3)) return text[idx];
              return randomChar();
            })
            .join("");
          setDisplayText(newText);
          iteration++;
          timeoutId = window.setTimeout(animate, 40);
        } else {
          setDisplayText(text);
          setIsAnimating(false);
        }
      };
      animate();
    }
    return () => window.clearTimeout(timeoutId);
  }, [isAnimating, text]);

  return (
    <MenuItem
      onMouseEnter={() => {
        if (!isAnimating) setIsAnimating(true);
      }}
    >
      {displayText}
    </MenuItem>
  );
}

export default function Header() {
  const [time, setTime] = useState(getCurrentTime());
  const [dotVisible, setDotVisible] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setDotVisible((v) => !v);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <Title>SNOWARI</Title>
        <Time>
          <BlinkingDot visible={dotVisible} />
          {time}
        </Time>
        <nav>
          <Menu>
            <AlienTextEffect text="INTRO" />
            <AlienTextEffect text="WORK" />
            <AlienTextEffect text="REVIEW" />
            <AlienTextEffect text="CONTACT" />
          </Menu>
        </nav>
      </HeaderWrapper>
    </>
  );
}
