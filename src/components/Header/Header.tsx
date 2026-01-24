import { useEffect, useState } from "react";
import randomChar from "../../utils/randomChar";
import getCurrentTime from "../../utils/getCurrentTime";
import {
  HeaderWrapper,
  Title,
  Time,
  Menu,
  MenuItem,
  BlinkingDot,
} from "./style";

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
  );
}
