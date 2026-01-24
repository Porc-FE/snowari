import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SectionWrapper,
  ContentLayout,
  ImageContainer,
  ProjectImage,
  DescriptionContainer,
  ProjectTitle,
  ProjectText,
} from "./style";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
          markers: true,
        },
      });

      timeline
        .from(".image-container-gsap", {
          x: -200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
        .from(
          ".desc-container-gsap > *",
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef}>
      <ContentLayout>
        <ImageContainer className="image-container-gsap">
          <ProjectImage src="/assets/ittaeOk-mockup.png" alt="이때어때 목업" />
        </ImageContainer>

        <DescriptionContainer className="desc-container-gsap">
          <ProjectTitle>이때 어때</ProjectTitle>
          <ProjectText>이때 어때 설명</ProjectText>
        </DescriptionContainer>
      </ContentLayout>
    </SectionWrapper>
  );
};

export default Section1;
