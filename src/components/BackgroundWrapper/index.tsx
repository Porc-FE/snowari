import { Wrapper, Overlay, Content } from "./style";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Overlay />
      <Content>{children}</Content>
    </Wrapper>
  );
}
