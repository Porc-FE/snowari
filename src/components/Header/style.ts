import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  padding: 20px 80px;
  text-align: center;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  color: #fff;

  margin: 0 auto;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 3.5rem;
`;

export const Time = styled.h3`
  font-size: 2.5rem;
`;

export const Menu = styled.ul`
  display: flex;
  text-align: right;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-size: 2.5rem;
  transition: color 0.2s;
  min-width: 180px;
  position: relative;
`;

export const BlinkingDot = styled.span<{ visible: boolean }>`
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
