import Header from "../components/Header/Header";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { InfoBox, SubTitle, Title } from "./style";

export default function Home() {
  return (
    <BackgroundWrapper>
      <Header />
      <InfoBox>
        <SubTitle>FRONT-END DEVELOPER</SubTitle>
        <Title>EUNSEO</Title>
        <Title>PORTFOLIO</Title>
      </InfoBox>
    </BackgroundWrapper>
  );
}
